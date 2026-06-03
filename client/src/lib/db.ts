const DB_NAME = "teatro-teleprompter-db";
const DB_VERSION = 2;
const USERS_STORE = "users";
const PRESETS_STORE = "presets";
const APP_STORE = "app";

export type User = {
  username: string;
  passwordHash: string;
  isAdmin: boolean;
  createdAt: number;
};

export type Preset = {
  id: string;
  username: string;
  name: string;
  type: "audio" | "voice";
  effectName: string;
  audioBlob?: Blob;
  audioName?: string;
  voiceConfig?: {
    rate: number;
    pitch: number;
    volume: number;
    lang: string;
  };
  createdAt: number;
  updatedAt: number;
};

function hashPassword(password: string): string {
  let hash = 0;
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return "h" + Math.abs(hash).toString(36);
}

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(USERS_STORE)) {
        db.createObjectStore(USERS_STORE, { keyPath: "username" });
      }
      if (!db.objectStoreNames.contains(PRESETS_STORE)) {
        const store = db.createObjectStore(PRESETS_STORE, { keyPath: "id" });
        store.createIndex("username", "username", { unique: false });
      }
      if (!db.objectStoreNames.contains(APP_STORE)) {
        db.createObjectStore(APP_STORE);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function registerUser(username: string, password: string): Promise<boolean> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(USERS_STORE, "readwrite");
    const store = tx.objectStore(USERS_STORE);
    const getReq = store.get(username);
    getReq.onsuccess = () => {
      if (getReq.result) {
        resolve(false);
        return;
      }
      const user: User = {
        username,
        passwordHash: hashPassword(password),
        isAdmin: false,
        createdAt: Date.now(),
      };
      const putReq = store.put(user);
      putReq.onsuccess = () => resolve(true);
      putReq.onerror = () => reject(putReq.error);
    };
    getReq.onerror = () => reject(getReq.error);
    tx.oncomplete = () => db.close();
  });
}

export async function loginUser(username: string, password: string): Promise<User | null> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(USERS_STORE, "readonly");
    const store = tx.objectStore(USERS_STORE);
    const req = store.get(username);
    req.onsuccess = () => {
      const user = req.result as User | undefined;
      if (!user) {
        resolve(null);
        return;
      }
      if (user.passwordHash !== hashPassword(password)) {
        resolve(null);
        return;
      }
      resolve(user);
    };
    req.onerror = () => reject(req.error);
    tx.oncomplete = () => db.close();
  });
}

export async function seedAdminUser(): Promise<void> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(USERS_STORE, "readwrite");
    const store = tx.objectStore(USERS_STORE);
    const req = store.get("admin000");
    req.onsuccess = () => {
      if (!req.result) {
        const admin: User = {
          username: "admin000",
          passwordHash: hashPassword("000"),
          isAdmin: true,
          createdAt: Date.now(),
        };
        store.put(admin);
      }
    };
    req.onerror = () => reject(req.error);
    tx.oncomplete = () => db.close();
    resolve();
  });
}

export async function savePreset(preset: Preset): Promise<void> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(PRESETS_STORE, "readwrite");
    const store = tx.objectStore(PRESETS_STORE);
    const req = store.put(preset);
    req.onerror = () => reject(req.error);
    tx.oncomplete = () => {
      db.close();
      resolve();
    };
  });
}

export async function getPresets(username: string): Promise<Preset[]> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(PRESETS_STORE, "readonly");
    const store = tx.objectStore(PRESETS_STORE);
    const index = store.index("username");
    const req = index.getAll(username);
    req.onsuccess = () => resolve(req.result as Preset[]);
    req.onerror = () => reject(req.error);
    tx.oncomplete = () => db.close();
  });
}

export async function deletePreset(id: string): Promise<void> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(PRESETS_STORE, "readwrite");
    const store = tx.objectStore(PRESETS_STORE);
    const req = store.delete(id);
    req.onerror = () => reject(req.error);
    tx.oncomplete = () => {
      db.close();
      resolve();
    };
  });
}

export async function saveAppState(username: string, state: unknown): Promise<void> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(APP_STORE, "readwrite");
    const store = tx.objectStore(APP_STORE);
    const req = store.put(state, `state-${username}`);
    req.onerror = () => reject(req.error);
    tx.oncomplete = () => {
      db.close();
      resolve();
    };
  });
}

export async function loadAppState(username: string): Promise<unknown> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(APP_STORE, "readonly");
    const store = tx.objectStore(APP_STORE);
    const req = store.get(`state-${username}`);
    req.onsuccess = () => resolve(req.result ?? null);
    req.onerror = () => reject(req.error);
    tx.oncomplete = () => db.close();
  });
}
