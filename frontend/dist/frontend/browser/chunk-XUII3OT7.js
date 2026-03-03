import {
  HttpClient,
  Injectable,
  computed,
  setClassMetadata,
  signal,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-267HQEHF.js";

// src/app/services/auth.service.ts
var AuthService = class _AuthService {
  http;
  API = "http://localhost:5003/api/auth";
  STORAGE_KEY = "auth_user";
  _user = signal(this.loadUser(), ...ngDevMode ? [{ debugName: "_user" }] : []);
  user = this._user.asReadonly();
  isLoggedIn = computed(() => this._user() !== null, ...ngDevMode ? [{ debugName: "isLoggedIn" }] : []);
  isAdmin = computed(() => this._user()?.role === "Admin", ...ngDevMode ? [{ debugName: "isAdmin" }] : []);
  constructor(http) {
    this.http = http;
  }
  loadUser() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  }
  login(username, password) {
    return this.http.post(`${this.API}/login`, { username, password }).pipe(tap((res) => this.setUser(res)));
  }
  register(dto) {
    return this.http.post(`${this.API}/register`, dto).pipe(tap((res) => this.setUser(res)));
  }
  logout() {
    localStorage.removeItem(this.STORAGE_KEY);
    this._user.set(null);
  }
  getToken() {
    return this._user()?.token ?? null;
  }
  uploadProfileImage(file) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post(`${this.API}/upload-profile-image`, formData);
  }
  setUser(user) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
    this._user.set(user);
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-XUII3OT7.js.map
