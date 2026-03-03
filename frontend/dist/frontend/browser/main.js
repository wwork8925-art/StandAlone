import {
  NotificationService
} from "./chunk-ZWTWPPKN.js";
import {
  AuthService
} from "./chunk-XUII3OT7.js";
import {
  Router,
  RouterLink,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-GZWQ6LDC.js";
import {
  CommonModule,
  Component,
  inject,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  setClassMetadata,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-267HQEHF.js";

// src/app/guards/admin-guard.ts
var adminGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isAdmin()) {
    return true;
  }
  return router.createUrlTree(["/hostels"]);
};

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "hostels", pathMatch: "full" },
  {
    path: "login",
    loadComponent: () => import("./chunk-FKKIUVJD.js").then((m) => m.Login)
  },
  {
    path: "register",
    loadComponent: () => import("./chunk-5PZR2S6L.js").then((m) => m.Register)
  },
  {
    path: "hostels",
    loadComponent: () => import("./chunk-VXSARJRH.js").then((m) => m.HostelList)
  },
  {
    path: "hostels/:name",
    loadComponent: () => import("./chunk-CTNBBBEK.js").then((m) => m.HostelDetail)
  },
  {
    path: "dash",
    loadComponent: () => import("./chunk-CPOGDI6X.js").then((m) => m.Dash)
  },
  {
    path: "guests-help",
    loadComponent: () => import("./chunk-US2YIOEA.js").then((m) => m.GuestsHelp)
  },
  {
    path: "generalview",
    loadComponent: () => import("./chunk-SAWIJNZY.js").then((m) => m.Generalview)
  },
  {
    path: "admin",
    loadComponent: () => import("./chunk-IE7BYUG7.js").then((m) => m.Admin),
    canActivate: [adminGuard]
  },
  { path: "**", redirectTo: "hostels" }
];

// src/app/interceptors/auth-interceptor.ts
var authInterceptor = (req, next) => {
  const auth = inject(AuthService);
  const token = auth.getToken();
  if (token) {
    const authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
    return next(authReq);
  }
  return next(req);
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};

// src/app/components/navbar/navbar.ts
function Navbar_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 10);
    \u0275\u0275text(2, "\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645");
    \u0275\u0275elementEnd()();
  }
}
function Navbar_Conditional_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.auth.user().profileImageUrl, \u0275\u0275sanitizeUrl);
  }
}
function Navbar_Conditional_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.auth.user().username.charAt(0).toUpperCase());
  }
}
function Navbar_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275conditionalCreate(1, Navbar_Conditional_19_Conditional_1_Template, 1, 1, "img", 12)(2, Navbar_Conditional_19_Conditional_2_Template, 2, 1, "div", 13);
    \u0275\u0275elementStart(3, "span", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "a", 15);
    \u0275\u0275text(6, "\u0637\u0644\u0628\u0627\u062A\u064A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 16);
    \u0275\u0275listener("click", function Navbar_Conditional_19_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(8, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r1.auth.user()) == null ? null : tmp_1_0.profileImageUrl) ? 1 : 2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.auth.user().username);
  }
}
function Navbar_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 17);
    \u0275\u0275text(1, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 18);
    \u0275\u0275text(3, "\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628");
    \u0275\u0275elementEnd();
  }
}
var Navbar = class _Navbar {
  auth = inject(AuthService);
  router = inject(Router);
  logout() {
    this.auth.logout();
    this.router.navigate(["/login"]);
  }
  static \u0275fac = function Navbar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Navbar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Navbar, selectors: [["app-navbar"]], decls: 21, vars: 2, consts: [[1, "navbar"], [1, "navbar-brand"], ["routerLink", "/hostels", 1, "brand-link"], [1, "brand-icon"], [1, "brand-name"], [1, "navbar-links"], ["routerLink", "/hostels", 1, "nav-link"], ["routerLink", "/guests-help", 1, "nav-link"], ["routerLink", "/generalview", 1, "nav-link"], [1, "navbar-auth"], ["routerLink", "/admin", 1, "nav-link", "nav-link-admin"], [1, "user-info"], ["alt", "profile", 1, "avatar", 3, "src"], [1, "avatar-placeholder"], [1, "username"], ["routerLink", "/dash", 1, "btn", "btn-white"], [1, "btn", "btn-outline-white", 3, "click"], ["routerLink", "/login", 1, "btn", "btn-outline-white"], ["routerLink", "/register", 1, "btn", "btn-white"]], template: function Navbar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "a", 2)(3, "span", 3);
      \u0275\u0275text(4, "\u{1F3E0}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6, "\u0646\u0638\u0627\u0645 \u0627\u0644\u0633\u0643\u0646\u0627\u062A");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "ul", 5)(8, "li")(9, "a", 6);
      \u0275\u0275text(10, "\u0627\u0644\u0633\u0643\u0646\u0627\u062A");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "li")(12, "a", 7);
      \u0275\u0275text(13, "\u0645\u0633\u0627\u0639\u062F\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "li")(15, "a", 8);
      \u0275\u0275text(16, "\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(17, Navbar_Conditional_17_Template, 3, 0, "li");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 9);
      \u0275\u0275conditionalCreate(19, Navbar_Conditional_19_Template, 9, 2)(20, Navbar_Conditional_20_Template, 4, 0);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(17);
      \u0275\u0275conditional(ctx.auth.isAdmin() ? 17 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.auth.isLoggedIn() ? 19 : 20);
    }
  }, dependencies: [RouterLink], styles: ['\n\n.navbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.2rem 3rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(0, 150, 255, 0.75) 0%,\n      rgba(0, 200, 255, 0.6) 50%,\n      rgba(100, 230, 255, 0.7) 100%);\n  backdrop-filter: blur(20px) saturate(200%);\n  -webkit-backdrop-filter: blur(20px) saturate(200%);\n  border-radius: 25px;\n  border: 2px solid rgba(255, 255, 255, 0.5);\n  border-top: 2px solid rgba(255, 255, 255, 0.8);\n  box-shadow:\n    0 8px 32px rgba(0, 150, 255, 0.3),\n    0 2px 8px rgba(255, 255, 255, 0.4) inset,\n    0 -2px 8px rgba(0, 100, 200, 0.2) inset,\n    0 20px 60px rgba(0, 150, 255, 0.2);\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  direction: rtl;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.navbar[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.4) 0%,\n      rgba(255, 255, 255, 0) 100%);\n  pointer-events: none;\n}\n.navbar[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 150px;\n  height: 150px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.4) 0%,\n      transparent 70%);\n  border-radius: 50%;\n  top: -75px;\n  right: 20%;\n  animation: _ngcontent-%COMP%_float 6s ease-in-out infinite;\n  pointer-events: none;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0) translateX(0);\n  }\n  50% {\n    transform: translateY(20px) translateX(30px);\n  }\n}\n.brand-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0.6rem 1.2rem;\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 18px;\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(255, 255, 255, 0.5) inset;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  z-index: 1;\n}\n.brand-link[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px) scale(1.02);\n  box-shadow: 0 8px 25px rgba(0, 150, 255, 0.4), 0 2px 5px rgba(255, 255, 255, 0.6) inset;\n  background: rgba(255, 255, 255, 0.4);\n}\n.brand-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-left: 0.8rem;\n  filter: drop-shadow(0 2px 4px rgba(0, 100, 200, 0.3));\n  animation: _ngcontent-%COMP%_pulse 3s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #e0f7ff 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  letter-spacing: 0.5px;\n  text-shadow: 0 2px 10px rgba(255, 255, 255, 0.5);\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));\n}\n.navbar-links[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  gap: 0.8rem;\n  margin: 0;\n  padding: 0;\n  position: relative;\n  z-index: 1;\n}\n.nav-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #ffffff;\n  font-weight: 600;\n  padding: 0.7rem 1.4rem;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.4) 0%,\n      rgba(255, 255, 255, 0.2) 50%,\n      rgba(200, 230, 255, 0.3) 100%);\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  border-top: 2px solid rgba(255, 255, 255, 0.8);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(255, 255, 255, 0.5) inset;\n  text-shadow: 0 1px 2px rgba(0, 100, 200, 0.3);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n}\n.nav-link[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    linear-gradient(\n      45deg,\n      transparent 30%,\n      rgba(255, 255, 255, 0.3) 50%,\n      transparent 70%);\n  transform: translateX(-100%);\n  transition: transform 0.6s;\n}\n.nav-link[_ngcontent-%COMP%]:hover::before {\n  transform: translateX(100%);\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.6) 0%,\n      rgba(255, 255, 255, 0.4) 50%,\n      rgba(150, 220, 255, 0.5) 100%);\n  box-shadow: 0 6px 25px rgba(0, 150, 255, 0.4), 0 2px 5px rgba(255, 255, 255, 0.7) inset;\n  transform: translateY(-3px);\n}\n.nav-link-admin[_ngcontent-%COMP%] {\n  font-weight: 700;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 200, 0, 0.5) 0%,\n      rgba(255, 150, 0, 0.4) 100%);\n  color: #ffffff;\n  text-shadow: 0 1px 3px rgba(200, 100, 0, 0.5);\n  box-shadow: 0 4px 20px rgba(255, 150, 0, 0.3), 0 1px 3px rgba(255, 255, 255, 0.5) inset;\n}\n.nav-link-admin[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 220, 50, 0.6) 0%,\n      rgba(255, 180, 50, 0.5) 100%);\n  box-shadow: 0 6px 30px rgba(255, 150, 0, 0.5), 0 2px 5px rgba(255, 255, 255, 0.7) inset;\n}\n.navbar-auth[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  position: relative;\n  z-index: 1;\n}\n.btn[_ngcontent-%COMP%] {\n  border: none;\n  cursor: pointer;\n  padding: 0.7rem 1.5rem;\n  border-radius: 16px;\n  font-weight: 600;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.45) 0%,\n      rgba(255, 255, 255, 0.25) 50%,\n      rgba(200, 240, 255, 0.35) 100%);\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  border-top: 2px solid rgba(255, 255, 255, 0.9);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(255, 255, 255, 0.6) inset;\n}\n.btn[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.4),\n      transparent);\n  transition: left 0.5s;\n}\n.btn[_ngcontent-%COMP%]:hover::after {\n  left: 100%;\n}\n.btn-white[_ngcontent-%COMP%] {\n  color: #0066cc;\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);\n}\n.btn-white[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.65) 0%,\n      rgba(255, 255, 255, 0.45) 50%,\n      rgba(220, 245, 255, 0.55) 100%);\n  transform: translateY(-3px);\n  box-shadow: 0 6px 25px rgba(0, 150, 255, 0.3), 0 2px 5px rgba(255, 255, 255, 0.8) inset;\n}\n.btn-outline-white[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.3) 0%,\n      rgba(200, 240, 255, 0.2) 100%);\n  border: 2px solid rgba(255, 255, 255, 0.7);\n  color: #ffffff;\n  text-shadow: 0 1px 3px rgba(0, 100, 200, 0.3);\n}\n.btn-outline-white[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.5) 0%,\n      rgba(220, 245, 255, 0.4) 100%);\n  transform: translateY(-3px);\n  box-shadow: 0 6px 25px rgba(0, 150, 255, 0.4), 0 2px 5px rgba(255, 255, 255, 0.7) inset;\n  border-color: rgba(255, 255, 255, 0.9);\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n  padding: 0.5rem 1rem;\n  border-radius: 25px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.5) 0%,\n      rgba(230, 250, 255, 0.4) 100%);\n  -webkit-backdrop-filter: blur(15px);\n  backdrop-filter: blur(15px);\n  border: 2px solid rgba(255, 255, 255, 0.6);\n  border-top: 2px solid rgba(255, 255, 255, 0.9);\n  box-shadow: 0 6px 20px rgba(0, 150, 255, 0.2), 0 2px 5px rgba(255, 255, 255, 0.6) inset;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n}\n.user-info[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 100px;\n  height: 100px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.4) 0%,\n      transparent 70%);\n  border-radius: 50%;\n}\n.user-info[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px) scale(1.02);\n  box-shadow: 0 8px 30px rgba(0, 150, 255, 0.3), 0 3px 8px rgba(255, 255, 255, 0.7) inset;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.6) 0%,\n      rgba(240, 255, 255, 0.5) 100%);\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 3px solid rgba(255, 255, 255, 0.8);\n  box-shadow: 0 4px 15px rgba(0, 150, 255, 0.3), 0 0 0 1px rgba(0, 100, 200, 0.2);\n}\n.avatar-placeholder[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #0096ff 0%,\n      #00c8ff 100%);\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n  border: 3px solid rgba(255, 255, 255, 0.8);\n  box-shadow: 0 4px 15px rgba(0, 150, 255, 0.4), 0 1px 3px rgba(255, 255, 255, 0.5) inset;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n}\n.username[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #ffffff;\n  text-shadow: 0 1px 3px rgba(0, 100, 200, 0.4);\n  letter-spacing: 0.3px;\n}\n@media (max-width: 900px) {\n  .navbar-links[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .navbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1.5rem;\n  }\n}\n/*# sourceMappingURL=navbar.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Navbar, [{
    type: Component,
    args: [{ selector: "app-navbar", imports: [RouterLink], template: '<nav class="navbar">\r\n  <div class="navbar-brand">\r\n    <a routerLink="/hostels" class="brand-link">\r\n      <span class="brand-icon">\u{1F3E0}</span>\r\n      <span class="brand-name">\u0646\u0638\u0627\u0645 \u0627\u0644\u0633\u0643\u0646\u0627\u062A</span>\r\n    </a>\r\n  </div>\r\n\r\n  <ul class="navbar-links">\r\n    <li><a routerLink="/hostels" class="nav-link">\u0627\u0644\u0633\u0643\u0646\u0627\u062A</a></li>\r\n    <li><a routerLink="/guests-help" class="nav-link">\u0645\u0633\u0627\u0639\u062F\u0629</a></li>\r\n    <li><a routerLink="/generalview" class="nav-link">\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629</a></li>\r\n\r\n    @if (auth.isAdmin()) {\r\n      <li><a routerLink="/admin" class="nav-link nav-link-admin">\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645</a></li>\r\n    }\r\n  </ul>\r\n\r\n  <div class="navbar-auth">\r\n    @if (auth.isLoggedIn()) {\r\n      <div class="user-info">\r\n        @if (auth.user()?.profileImageUrl) {\r\n          <img [src]="auth.user()!.profileImageUrl" alt="profile" class="avatar" />\r\n        } @else {\r\n          <div class="avatar-placeholder">{{ auth.user()!.username.charAt(0).toUpperCase() }}</div>\r\n        }\r\n        <span class="username">{{ auth.user()!.username }}</span>\r\n      </div>\r\n      <a routerLink="/dash" class="btn btn-white">\u0637\u0644\u0628\u0627\u062A\u064A</a>\r\n      <button class="btn btn-outline-white" (click)="logout()">\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C</button>\r\n    } @else {\r\n      <a routerLink="/login" class="btn btn-outline-white">\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644</a>\r\n      <a routerLink="/register" class="btn btn-white">\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628</a>\r\n    }\r\n  </div>\r\n</nav>', styles: ['/* src/app/components/navbar/navbar.css */\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.2rem 3rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(0, 150, 255, 0.75) 0%,\n      rgba(0, 200, 255, 0.6) 50%,\n      rgba(100, 230, 255, 0.7) 100%);\n  backdrop-filter: blur(20px) saturate(200%);\n  -webkit-backdrop-filter: blur(20px) saturate(200%);\n  border-radius: 25px;\n  border: 2px solid rgba(255, 255, 255, 0.5);\n  border-top: 2px solid rgba(255, 255, 255, 0.8);\n  box-shadow:\n    0 8px 32px rgba(0, 150, 255, 0.3),\n    0 2px 8px rgba(255, 255, 255, 0.4) inset,\n    0 -2px 8px rgba(0, 100, 200, 0.2) inset,\n    0 20px 60px rgba(0, 150, 255, 0.2);\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  direction: rtl;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.navbar::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.4) 0%,\n      rgba(255, 255, 255, 0) 100%);\n  pointer-events: none;\n}\n.navbar::after {\n  content: "";\n  position: absolute;\n  width: 150px;\n  height: 150px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.4) 0%,\n      transparent 70%);\n  border-radius: 50%;\n  top: -75px;\n  right: 20%;\n  animation: float 6s ease-in-out infinite;\n  pointer-events: none;\n}\n@keyframes float {\n  0%, 100% {\n    transform: translateY(0) translateX(0);\n  }\n  50% {\n    transform: translateY(20px) translateX(30px);\n  }\n}\n.brand-link {\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0.6rem 1.2rem;\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 18px;\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(255, 255, 255, 0.5) inset;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  z-index: 1;\n}\n.brand-link:hover {\n  transform: translateY(-3px) scale(1.02);\n  box-shadow: 0 8px 25px rgba(0, 150, 255, 0.4), 0 2px 5px rgba(255, 255, 255, 0.6) inset;\n  background: rgba(255, 255, 255, 0.4);\n}\n.brand-icon {\n  font-size: 2rem;\n  margin-left: 0.8rem;\n  filter: drop-shadow(0 2px 4px rgba(0, 100, 200, 0.3));\n  animation: pulse 3s ease-in-out infinite;\n}\n@keyframes pulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n}\n.brand-name {\n  font-weight: 700;\n  font-size: 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #e0f7ff 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  letter-spacing: 0.5px;\n  text-shadow: 0 2px 10px rgba(255, 255, 255, 0.5);\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));\n}\n.navbar-links {\n  display: flex;\n  list-style: none;\n  gap: 0.8rem;\n  margin: 0;\n  padding: 0;\n  position: relative;\n  z-index: 1;\n}\n.nav-link {\n  text-decoration: none;\n  color: #ffffff;\n  font-weight: 600;\n  padding: 0.7rem 1.4rem;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.4) 0%,\n      rgba(255, 255, 255, 0.2) 50%,\n      rgba(200, 230, 255, 0.3) 100%);\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  border-top: 2px solid rgba(255, 255, 255, 0.8);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(255, 255, 255, 0.5) inset;\n  text-shadow: 0 1px 2px rgba(0, 100, 200, 0.3);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n}\n.nav-link::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    linear-gradient(\n      45deg,\n      transparent 30%,\n      rgba(255, 255, 255, 0.3) 50%,\n      transparent 70%);\n  transform: translateX(-100%);\n  transition: transform 0.6s;\n}\n.nav-link:hover::before {\n  transform: translateX(100%);\n}\n.nav-link:hover {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.6) 0%,\n      rgba(255, 255, 255, 0.4) 50%,\n      rgba(150, 220, 255, 0.5) 100%);\n  box-shadow: 0 6px 25px rgba(0, 150, 255, 0.4), 0 2px 5px rgba(255, 255, 255, 0.7) inset;\n  transform: translateY(-3px);\n}\n.nav-link-admin {\n  font-weight: 700;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 200, 0, 0.5) 0%,\n      rgba(255, 150, 0, 0.4) 100%);\n  color: #ffffff;\n  text-shadow: 0 1px 3px rgba(200, 100, 0, 0.5);\n  box-shadow: 0 4px 20px rgba(255, 150, 0, 0.3), 0 1px 3px rgba(255, 255, 255, 0.5) inset;\n}\n.nav-link-admin:hover {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 220, 50, 0.6) 0%,\n      rgba(255, 180, 50, 0.5) 100%);\n  box-shadow: 0 6px 30px rgba(255, 150, 0, 0.5), 0 2px 5px rgba(255, 255, 255, 0.7) inset;\n}\n.navbar-auth {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  position: relative;\n  z-index: 1;\n}\n.btn {\n  border: none;\n  cursor: pointer;\n  padding: 0.7rem 1.5rem;\n  border-radius: 16px;\n  font-weight: 600;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.45) 0%,\n      rgba(255, 255, 255, 0.25) 50%,\n      rgba(200, 240, 255, 0.35) 100%);\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  border-top: 2px solid rgba(255, 255, 255, 0.9);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(255, 255, 255, 0.6) inset;\n}\n.btn::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.4),\n      transparent);\n  transition: left 0.5s;\n}\n.btn:hover::after {\n  left: 100%;\n}\n.btn-white {\n  color: #0066cc;\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);\n}\n.btn-white:hover {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.65) 0%,\n      rgba(255, 255, 255, 0.45) 50%,\n      rgba(220, 245, 255, 0.55) 100%);\n  transform: translateY(-3px);\n  box-shadow: 0 6px 25px rgba(0, 150, 255, 0.3), 0 2px 5px rgba(255, 255, 255, 0.8) inset;\n}\n.btn-outline-white {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.3) 0%,\n      rgba(200, 240, 255, 0.2) 100%);\n  border: 2px solid rgba(255, 255, 255, 0.7);\n  color: #ffffff;\n  text-shadow: 0 1px 3px rgba(0, 100, 200, 0.3);\n}\n.btn-outline-white:hover {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.5) 0%,\n      rgba(220, 245, 255, 0.4) 100%);\n  transform: translateY(-3px);\n  box-shadow: 0 6px 25px rgba(0, 150, 255, 0.4), 0 2px 5px rgba(255, 255, 255, 0.7) inset;\n  border-color: rgba(255, 255, 255, 0.9);\n}\n.user-info {\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n  padding: 0.5rem 1rem;\n  border-radius: 25px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.5) 0%,\n      rgba(230, 250, 255, 0.4) 100%);\n  -webkit-backdrop-filter: blur(15px);\n  backdrop-filter: blur(15px);\n  border: 2px solid rgba(255, 255, 255, 0.6);\n  border-top: 2px solid rgba(255, 255, 255, 0.9);\n  box-shadow: 0 6px 20px rgba(0, 150, 255, 0.2), 0 2px 5px rgba(255, 255, 255, 0.6) inset;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n}\n.user-info::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 100px;\n  height: 100px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.4) 0%,\n      transparent 70%);\n  border-radius: 50%;\n}\n.user-info:hover {\n  transform: translateY(-3px) scale(1.02);\n  box-shadow: 0 8px 30px rgba(0, 150, 255, 0.3), 0 3px 8px rgba(255, 255, 255, 0.7) inset;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.6) 0%,\n      rgba(240, 255, 255, 0.5) 100%);\n}\n.avatar {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 3px solid rgba(255, 255, 255, 0.8);\n  box-shadow: 0 4px 15px rgba(0, 150, 255, 0.3), 0 0 0 1px rgba(0, 100, 200, 0.2);\n}\n.avatar-placeholder {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #0096ff 0%,\n      #00c8ff 100%);\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n  border: 3px solid rgba(255, 255, 255, 0.8);\n  box-shadow: 0 4px 15px rgba(0, 150, 255, 0.4), 0 1px 3px rgba(255, 255, 255, 0.5) inset;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n}\n.username {\n  font-weight: 600;\n  color: #ffffff;\n  text-shadow: 0 1px 3px rgba(0, 100, 200, 0.4);\n  letter-spacing: 0.3px;\n}\n@media (max-width: 900px) {\n  .navbar-links {\n    display: none;\n  }\n  .navbar {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1.5rem;\n  }\n}\n/*# sourceMappingURL=navbar.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Navbar, { className: "Navbar", filePath: "src/app/components/navbar/navbar.ts", lineNumber: 11 });
})();

// src/app/components/notifications/notifications.ts
var _forTrack0 = ($index, $item) => $item.id;
function NotificationsComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 2)(1, "span", 3);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 4);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 5);
    \u0275\u0275domListener("click", function NotificationsComponent_For_2_Template_button_click_5_listener() {
      const notification_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeNotification(notification_r2.id));
    });
    \u0275\u0275text(6, " \xD7 ");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const notification_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap("notification-" + notification_r2.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getIcon(notification_r2.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notification_r2.message);
  }
}
var NotificationsComponent = class _NotificationsComponent {
  // حقن خدمة الإشعارات
  notificationService = inject(NotificationService);
  // ====================
  // الوصول لـ Signal الإشعارات مباشرة
  // ====================
  // في الـ Template نستخدم ()notifications لقراءة قيمة الـ Signal
  // Angular يتتبع تلقائياً أي تغيير ويحدث الواجهة
  notifications = this.notificationService.notifications;
  // ====================
  // حذف إشعار عند الضغط على زر الإغلاق
  // ====================
  closeNotification(id) {
    this.notificationService.remove(id);
  }
  // ====================
  // الحصول على الأيقونة حسب نوع الإشعار
  // ====================
  getIcon(type) {
    const icons = {
      success: "\u2713",
      error: "\u2717",
      info: "\u2139",
      warning: "\u26A0"
    };
    return icons[type] || "\u2139";
  }
  static \u0275fac = function NotificationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationsComponent, selectors: [["app-notifications"]], decls: 3, vars: 0, consts: [[1, "notifications-container"], [1, "notification", 3, "class"], [1, "notification"], [1, "notification-icon"], [1, "notification-message"], ["aria-label", "\u0625\u063A\u0644\u0627\u0642", 1, "notification-close", 3, "click"]], template: function NotificationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275repeaterCreate(1, NotificationsComponent_For_2_Template, 7, 4, "div", 1, _forTrack0);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.notifications());
    }
  }, dependencies: [CommonModule], styles: ['\n\n.notifications-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 110px;\n  right: 20px;\n  z-index: 9999;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  max-width: 420px;\n}\n.notification[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 1rem 1.2rem;\n  border-radius: 16px;\n  animation: _ngcontent-%COMP%_slideInRight 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-backdrop-filter: blur(20px) saturate(150%);\n  backdrop-filter: blur(20px) saturate(150%);\n  border: 2px solid;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(255, 255, 255, 0.4) inset;\n  position: relative;\n  overflow: hidden;\n}\n.notification[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.3) 0%,\n      transparent 100%);\n  pointer-events: none;\n}\n.notification-success[_ngcontent-%COMP%] {\n  border-color: rgba(40, 167, 69, 0.4);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(40, 200, 90, 0.92) 0%,\n      rgba(30, 180, 75, 0.88) 100%);\n  color: #ffffff;\n}\n.notification-error[_ngcontent-%COMP%] {\n  border-color: rgba(220, 53, 69, 0.4);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(240, 70, 85, 0.92) 0%,\n      rgba(220, 53, 69, 0.88) 100%);\n  color: #ffffff;\n}\n.notification-info[_ngcontent-%COMP%] {\n  border-color: rgba(0, 150, 255, 0.4);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(0, 160, 255, 0.92) 0%,\n      rgba(0, 140, 235, 0.88) 100%);\n  color: #ffffff;\n}\n.notification-warning[_ngcontent-%COMP%] {\n  border-color: rgba(255, 193, 7, 0.5);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 200, 30, 0.92) 0%,\n      rgba(255, 180, 10, 0.88) 100%);\n  color: #1a1a1a;\n}\n.notification-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  min-width: 28px;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n  filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.1));\n}\n.notification-message[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 0.95rem;\n  font-weight: 500;\n  line-height: 1.4;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);\n}\n.notification-close[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  border: none;\n  font-size: 20px;\n  font-weight: bold;\n  cursor: pointer;\n  padding: 0;\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  transition: all 0.2s ease;\n  color: inherit;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.notification-close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.35);\n  transform: scale(1.1);\n}\n@keyframes _ngcontent-%COMP%_slideInRight {\n  from {\n    transform: translateX(450px);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@media (max-width: 500px) {\n  .notifications-container[_ngcontent-%COMP%] {\n    right: 10px;\n    left: 10px;\n    top: 90px;\n    max-width: none;\n  }\n}\n/*# sourceMappingURL=notifications.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationsComponent, [{
    type: Component,
    args: [{ selector: "app-notifications", standalone: true, imports: [CommonModule], template: `<!-- ====================\r
     \u0645\u0643\u0648\u0646 \u0639\u0631\u0636 \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A\r
     ==================== -->\r
\r
<div class="notifications-container">\r
  <!-- \u0646\u0633\u062A\u062E\u062F\u0645 ()notifications \u0644\u0642\u0631\u0627\u0621\u0629 \u0642\u064A\u0645\u0629 \u0627\u0644\u0640 Signal -->\r
  <!-- @for \u0647\u0648 \u0627\u0644\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062C\u062F\u064A\u062F\u0629 \u0641\u064A Angular 17+ \u0628\u062F\u0644\u0627\u064B \u0645\u0646 *ngFor -->\r
  @for (notification of notifications(); track notification.id) {\r
    <div class="notification" [class]="'notification-' + notification.type">\r
      <!-- \u0623\u064A\u0642\u0648\u0646\u0629 \u0627\u0644\u0625\u0634\u0639\u0627\u0631 -->\r
      <span class="notification-icon">{{ getIcon(notification.type) }}</span>\r
      \r
      <!-- \u0646\u0635 \u0627\u0644\u0625\u0634\u0639\u0627\u0631 -->\r
      <span class="notification-message">{{ notification.message }}</span>\r
      \r
      <!-- \u0632\u0631 \u0627\u0644\u0625\u063A\u0644\u0627\u0642 -->\r
      <button \r
        class="notification-close" \r
        (click)="closeNotification(notification.id)"\r
        aria-label="\u0625\u063A\u0644\u0627\u0642">\r
        \xD7\r
      </button>\r
    </div>\r
  }\r
</div>\r
`, styles: ['/* src/app/components/notifications/notifications.css */\n.notifications-container {\n  position: fixed;\n  top: 110px;\n  right: 20px;\n  z-index: 9999;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  max-width: 420px;\n}\n.notification {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 1rem 1.2rem;\n  border-radius: 16px;\n  animation: slideInRight 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-backdrop-filter: blur(20px) saturate(150%);\n  backdrop-filter: blur(20px) saturate(150%);\n  border: 2px solid;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(255, 255, 255, 0.4) inset;\n  position: relative;\n  overflow: hidden;\n}\n.notification::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.3) 0%,\n      transparent 100%);\n  pointer-events: none;\n}\n.notification-success {\n  border-color: rgba(40, 167, 69, 0.4);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(40, 200, 90, 0.92) 0%,\n      rgba(30, 180, 75, 0.88) 100%);\n  color: #ffffff;\n}\n.notification-error {\n  border-color: rgba(220, 53, 69, 0.4);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(240, 70, 85, 0.92) 0%,\n      rgba(220, 53, 69, 0.88) 100%);\n  color: #ffffff;\n}\n.notification-info {\n  border-color: rgba(0, 150, 255, 0.4);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(0, 160, 255, 0.92) 0%,\n      rgba(0, 140, 235, 0.88) 100%);\n  color: #ffffff;\n}\n.notification-warning {\n  border-color: rgba(255, 193, 7, 0.5);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 200, 30, 0.92) 0%,\n      rgba(255, 180, 10, 0.88) 100%);\n  color: #1a1a1a;\n}\n.notification-icon {\n  font-size: 24px;\n  font-weight: bold;\n  min-width: 28px;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n  filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.1));\n}\n.notification-message {\n  flex: 1;\n  font-size: 0.95rem;\n  font-weight: 500;\n  line-height: 1.4;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);\n}\n.notification-close {\n  background: rgba(255, 255, 255, 0.2);\n  border: none;\n  font-size: 20px;\n  font-weight: bold;\n  cursor: pointer;\n  padding: 0;\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  transition: all 0.2s ease;\n  color: inherit;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.notification-close:hover {\n  background: rgba(255, 255, 255, 0.35);\n  transform: scale(1.1);\n}\n@keyframes slideInRight {\n  from {\n    transform: translateX(450px);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@media (max-width: 500px) {\n  .notifications-container {\n    right: 10px;\n    left: 10px;\n    top: 90px;\n    max-width: none;\n  }\n}\n/*# sourceMappingURL=notifications.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationsComponent, { className: "NotificationsComponent", filePath: "src/app/components/notifications/notifications.ts", lineNumber: 19 });
})();

// src/app/app.ts
var App = class _App {
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "main-content"]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar")(1, "app-notifications");
      \u0275\u0275elementStart(2, "main", 0);
      \u0275\u0275element(3, "router-outlet");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [RouterOutlet, Navbar, NotificationsComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet, Navbar, NotificationsComponent], template: '<!--  \u0647\u0646\u0627 \u062B\u0627\u0646\u064A \u0627\u0646\u062A\u0631\u0646\u064A \u0628\u0648\u0646\u062A \u0644\u0644\u0628\u0631\u0646\u0627\u0645\u062C -->\n<app-navbar></app-navbar>\n\n<!-- \u0645\u0643\u0648\u0646 \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A - \u064A\u0638\u0647\u0631 \u0641\u064A \u062C\u0645\u064A\u0639 \u0627\u0644\u0635\u0641\u062D\u0627\u062A -->\n<app-notifications></app-notifications>\n\n<main class="main-content">\n  <!--\u0627\u064A \u0634\u064A \u0646\u0643\u062A\u0628\u0647 \u0641\u0648\u0642 \u062F\u0627\u0626\u0645\u0627 \u0628\u064A\u0643\u0648\u0646 \u062F\u0627\u062E\u0644 \u0627\u0644\u062A\u0637\u0628\u064A\u0642 \u0633\u0648\u0627\u0621 \u0637\u0644\u0639\u0646\u0627 \u0627\u0648 \u063A\u064A\u0631\u0646\u0627 \u0627\u0644\u0643\u0645\u0648\u0628\u0646\u062A -->\n  <router-outlet></router-outlet>\n</main>\n\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 12 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
