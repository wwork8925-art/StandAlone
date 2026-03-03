import {
  HostelService
} from "./chunk-7DRUOIXK.js";
import {
  AuthService
} from "./chunk-XUII3OT7.js";
import {
  Router,
  RouterLink
} from "./chunk-GZWQ6LDC.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-267HQEHF.js";

// src/app/components/hostel-list/hostel-list.ts
var _c0 = (a0) => ["/hostels", a0];
var _forTrack0 = ($index, $item) => $item.hostelName;
function HostelList_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 3);
    \u0275\u0275text(1, " + \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0633\u0643\u0646\u0627\u062A ");
    \u0275\u0275elementEnd();
  }
}
function HostelList_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0633\u0643\u0646\u0627\u062A...");
    \u0275\u0275elementEnd()();
  }
}
function HostelList_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function HostelList_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 9);
    \u0275\u0275text(2, "\u{1F3E0}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0633\u0643\u0646\u0627\u062A \u0645\u062A\u0627\u062D\u0629 \u062D\u0627\u0644\u064A\u0627\u064B");
    \u0275\u0275elementEnd()();
  }
}
function HostelList_Conditional_8_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 12);
  }
  if (rf & 2) {
    const hostel_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", hostel_r2.imageUrls[0], \u0275\u0275sanitizeUrl)("alt", hostel_r2.hostelName);
  }
}
function HostelList_Conditional_8_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, "\u{1F3E0}");
    \u0275\u0275elementEnd();
  }
}
function HostelList_Conditional_8_For_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u0645\u0645\u062A\u0644\u0626 ");
  }
}
function HostelList_Conditional_8_For_2_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u0634\u0628\u0647 \u0645\u0645\u062A\u0644\u0626 ");
  }
}
function HostelList_Conditional_8_For_2_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u0645\u062A\u0627\u062D ");
  }
}
function HostelList_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 10)(1, "div", 11);
    \u0275\u0275conditionalCreate(2, HostelList_Conditional_8_For_2_Conditional_2_Template, 1, 2, "img", 12)(3, HostelList_Conditional_8_For_2_Conditional_3_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14)(5, "h3", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 17)(10, "div", 18)(11, "span");
    \u0275\u0275text(12, "\u0627\u0644\u0625\u0634\u063A\u0627\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 19);
    \u0275\u0275element(16, "div", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 21)(18, "span", 22);
    \u0275\u0275conditionalCreate(19, HostelList_Conditional_8_For_2_Conditional_19_Template, 1, 0)(20, HostelList_Conditional_8_For_2_Conditional_20_Template, 1, 0)(21, HostelList_Conditional_8_For_2_Conditional_21_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 23);
    \u0275\u0275text(23, "\u0639\u0631\u0636 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u2192");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const hostel_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c0, hostel_r2.hostelName));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(hostel_r2.imageUrls && hostel_r2.imageUrls.length > 0 ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(hostel_r2.hostelName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4CD} ", hostel_r2.location);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", hostel_r2.currentResidents, " / ", hostel_r2.capacity);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.getOccupancyClass(hostel_r2));
    \u0275\u0275styleProp("width", ctx_r0.getOccupancyPercent(hostel_r2) + "%");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("badge-" + ctx_r0.getOccupancyClass(hostel_r2));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.getOccupancyPercent(hostel_r2) >= 100 ? 19 : ctx_r0.getOccupancyPercent(hostel_r2) >= 60 ? 20 : 21);
  }
}
function HostelList_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, HostelList_Conditional_8_For_2_Template, 24, 15, "a", 10, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.hostels());
  }
}
var HostelList = class _HostelList {
  hostelService = inject(HostelService);
  auth = inject(AuthService);
  router = inject(Router);
  hostels = signal([], ...ngDevMode ? [{ debugName: "hostels" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  ngOnInit() {
    this.hostelService.getAll().subscribe({
      next: (data) => {
        this.hostels.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("\u062A\u0639\u0630\u0631 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0633\u0643\u0646\u0627\u062A. \u062A\u062D\u0642\u0642 \u0645\u0646 \u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u062E\u0627\u062F\u0645");
        this.loading.set(false);
      }
    });
  }
  getOccupancyPercent(hostel) {
    if (!hostel.capacity)
      return 0;
    return Math.round(hostel.currentResidents / hostel.capacity * 100);
  }
  getOccupancyClass(hostel) {
    const pct = this.getOccupancyPercent(hostel);
    if (pct >= 90)
      return "full";
    if (pct >= 60)
      return "medium";
    return "available";
  }
  static \u0275fac = function HostelList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HostelList)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HostelList, selectors: [["app-hostel-list"]], decls: 9, vars: 2, consts: [[1, "page-container"], [1, "page-header"], [1, "section-title"], ["routerLink", "/admin", 1, "btn", "btn-primary"], [1, "loading-state"], [1, "alert", "alert-error"], [1, "empty-state"], [1, "hostels-grid"], [1, "spinner"], [1, "empty-icon"], [1, "hostel-card", "card", 3, "routerLink"], [1, "hostel-image"], [3, "src", "alt"], [1, "no-image"], [1, "hostel-info"], [1, "hostel-name"], [1, "hostel-location"], [1, "occupancy"], [1, "occupancy-labels"], [1, "occupancy-bar"], [1, "occupancy-fill"], [1, "hostel-footer"], [1, "occupancy-badge"], [1, "view-details"]], template: function HostelList_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "\u0627\u0644\u0633\u0643\u0646\u0627\u062A \u0627\u0644\u0645\u062A\u0627\u062D\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(4, HostelList_Conditional_4_Template, 2, 0, "a", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, HostelList_Conditional_5_Template, 4, 0, "div", 4)(6, HostelList_Conditional_6_Template, 2, 1, "div", 5)(7, HostelList_Conditional_7_Template, 5, 0, "div", 6)(8, HostelList_Conditional_8_Template, 3, 0, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.auth.isAdmin() ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 5 : ctx.error() ? 6 : ctx.hostels().length === 0 ? 7 : 8);
    }
  }, dependencies: [RouterLink], styles: ['\n\n.page-container[_ngcontent-%COMP%] {\n  padding: 2.5rem;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  background:\n    radial-gradient(\n      circle at 20% 80%,\n      rgba(0, 200, 255, 0.15) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 20%,\n      rgba(100, 255, 200, 0.15) 0%,\n      transparent 50%),\n    linear-gradient(\n      180deg,\n      #c7e9ff 0%,\n      #e0f4ff 30%,\n      #f0f9ff 60%,\n      #e8f5ff 100%);\n  min-height: 100vh;\n  direction: rtl;\n  position: relative;\n  overflow: hidden;\n}\n.page-container[_ngcontent-%COMP%]::before {\n  content: "";\n  position: fixed;\n  width: 300px;\n  height: 300px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(0, 200, 255, 0.2) 0%,\n      rgba(100, 230, 255, 0.1) 40%,\n      transparent 70%);\n  border-radius: 50%;\n  top: -100px;\n  right: 10%;\n  animation: _ngcontent-%COMP%_float-bubble 15s ease-in-out infinite;\n  pointer-events: none;\n}\n.page-container[_ngcontent-%COMP%]::after {\n  content: "";\n  position: fixed;\n  width: 400px;\n  height: 400px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(100, 255, 200, 0.15) 0%,\n      rgba(150, 255, 220, 0.08) 50%,\n      transparent 70%);\n  border-radius: 50%;\n  bottom: -150px;\n  left: 5%;\n  animation: _ngcontent-%COMP%_float-bubble 20s ease-in-out infinite reverse;\n  pointer-events: none;\n}\n@keyframes _ngcontent-%COMP%_float-bubble {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  33% {\n    transform: translate(30px, -40px) scale(1.05);\n  }\n  66% {\n    transform: translate(-20px, -20px) scale(0.95);\n  }\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 3rem;\n  position: relative;\n  z-index: 1;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  background:\n    linear-gradient(\n      135deg,\n      #0066cc 0%,\n      #0099ff 50%,\n      #00ccff 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  filter: drop-shadow(0 2px 8px rgba(0, 150, 255, 0.4)) drop-shadow(0 4px 15px rgba(0, 200, 255, 0.2));\n  letter-spacing: 1px;\n  position: relative;\n}\n.section-title[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -8px;\n  left: 0;\n  width: 100px;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #0096ff 0%,\n      rgba(0, 200, 255, 0.5) 100%);\n  border-radius: 2px;\n  box-shadow: 0 2px 8px rgba(0, 150, 255, 0.4);\n}\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 0.8rem 1.8rem;\n  border-radius: 18px;\n  text-decoration: none;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(0, 150, 255, 0.95) 0%,\n      rgba(0, 120, 220, 0.9) 50%,\n      rgba(0, 100, 200, 0.95) 100%);\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top: 2px solid rgba(255, 255, 255, 0.6);\n  color: #fff;\n  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n  box-shadow: 0 6px 20px rgba(0, 150, 255, 0.4), 0 2px 5px rgba(255, 255, 255, 0.3) inset;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.btn-primary[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.3) 0%,\n      transparent 100%);\n  pointer-events: none;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(0, 180, 255, 1) 0%,\n      rgba(0, 150, 235, 0.95) 50%,\n      rgba(0, 120, 220, 1) 100%);\n  transform: translateY(-3px);\n  box-shadow: 0 8px 30px rgba(0, 150, 255, 0.5), 0 3px 8px rgba(255, 255, 255, 0.4) inset;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 5rem 0;\n  gap: 1.5rem;\n  position: relative;\n  z-index: 1;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border: 5px solid rgba(0, 150, 255, 0.15);\n  border-top: 5px solid #0096ff;\n  border-right: 5px solid #00c8ff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  box-shadow: 0 4px 15px rgba(0, 150, 255, 0.3), 0 0 0 8px rgba(0, 150, 255, 0.05);\n  position: relative;\n}\n.spinner[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 8px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(0, 200, 255, 0.2) 0%,\n      transparent 70%);\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  filter: drop-shadow(0 4px 15px rgba(0, 150, 255, 0.3));\n  background:\n    linear-gradient(\n      135deg,\n      #0096ff 0%,\n      #00c8ff 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: #0066cc;\n  text-shadow: 0 1px 3px rgba(255, 255, 255, 0.8);\n}\n.hostels-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 2.5rem;\n  position: relative;\n  z-index: 1;\n}\n.hostel-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.7) 0%,\n      rgba(240, 250, 255, 0.6) 50%,\n      rgba(230, 245, 255, 0.7) 100%);\n  backdrop-filter: blur(20px) saturate(180%);\n  -webkit-backdrop-filter: blur(20px) saturate(180%);\n  border-radius: 24px;\n  border: 2px solid rgba(255, 255, 255, 0.6);\n  border-top: 3px solid rgba(255, 255, 255, 0.9);\n  overflow: hidden;\n  box-shadow:\n    0 8px 32px rgba(0, 150, 255, 0.15),\n    0 2px 8px rgba(255, 255, 255, 0.5) inset,\n    0 15px 45px rgba(0, 100, 200, 0.1);\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  text-decoration: none;\n  color: #1a1a1a;\n  position: relative;\n  overflow: visible;\n}\n.hostel-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 40%;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.4) 0%,\n      transparent 100%);\n  pointer-events: none;\n  border-radius: 24px 24px 0 0;\n  z-index: 1;\n}\n.hostel-card[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(0, 200, 255, 0.3) 0%,\n      transparent 70%);\n  border-radius: 50%;\n  top: -30px;\n  right: -30px;\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity 0.4s;\n}\n.hostel-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px) scale(1.02);\n  box-shadow:\n    0 15px 50px rgba(0, 150, 255, 0.3),\n    0 3px 15px rgba(255, 255, 255, 0.6) inset,\n    0 20px 60px rgba(0, 200, 255, 0.2);\n  border-color: rgba(255, 255, 255, 0.8);\n}\n.hostel-card[_ngcontent-%COMP%]:hover::after {\n  opacity: 1;\n}\n.hostel-image[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.hostel-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n  position: relative;\n  z-index: 0;\n}\n.hostel-image[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 50%,\n      rgba(0, 150, 255, 0.05) 100%);\n  pointer-events: none;\n}\n.no-image[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 200px;\n  font-size: 3.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(0, 150, 255, 0.2) 0%,\n      rgba(100, 200, 255, 0.15) 50%,\n      rgba(0, 180, 255, 0.2) 100%);\n  border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n  color: #0096ff;\n  filter: drop-shadow(0 2px 8px rgba(0, 150, 255, 0.3));\n}\n.hostel-info[_ngcontent-%COMP%] {\n  padding: 1.3rem 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n  position: relative;\n  z-index: 2;\n}\n.hostel-name[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n  background:\n    linear-gradient(\n      135deg,\n      #0066cc 0%,\n      #0099ff 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  filter: drop-shadow(0 1px 3px rgba(0, 100, 200, 0.2));\n  letter-spacing: 0.3px;\n}\n.hostel-location[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #2d5a7b;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n}\n.occupancy-labels[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #2d5a7b;\n}\n.occupancy-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 14px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(200, 220, 240, 0.4) 0%,\n      rgba(220, 235, 250, 0.3) 100%);\n  border: 1px solid rgba(0, 100, 200, 0.15);\n  border-radius: 10px;\n  overflow: hidden;\n  margin-top: 0.5rem;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05) inset, 0 1px 2px rgba(255, 255, 255, 0.5);\n  position: relative;\n}\n.occupancy-bar[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.4) 0%,\n      transparent 100%);\n  pointer-events: none;\n}\n.occupancy-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 10px;\n  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.occupancy-fill[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.4) 0%,\n      transparent 100%);\n  border-radius: 10px 10px 0 0;\n}\n.available[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #28d96a 0%,\n      #20c463 100%);\n}\n.semi-full[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffd54f 0%,\n      #ffc107 100%);\n}\n.full[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b6b 0%,\n      #dc3545 100%);\n}\n.hostel-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 1.2rem;\n  position: relative;\n  z-index: 2;\n}\n.occupancy-badge[_ngcontent-%COMP%] {\n  font-weight: 700;\n  padding: 0.5rem 1rem;\n  border-radius: 15px;\n  font-size: 0.85rem;\n  color: #fff;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top: 2px solid rgba(255, 255, 255, 0.6);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(255, 255, 255, 0.3) inset;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n  position: relative;\n  overflow: hidden;\n}\n.occupancy-badge[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.3) 0%,\n      transparent 100%);\n  pointer-events: none;\n}\n.badge-available[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #28d96a 0%,\n      #20c463 100%);\n}\n.badge-semi-full[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #ffd54f 0%,\n      #ffc107 100%);\n  color: #4a3c00;\n}\n.badge-full[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #ff6b6b 0%,\n      #dc3545 100%);\n}\n.view-details[_ngcontent-%COMP%] {\n  font-weight: 600;\n  padding: 0.5rem 1rem;\n  border-radius: 12px;\n  font-size: 0.9rem;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(0, 150, 255, 0.25) 0%,\n      rgba(0, 120, 220, 0.2) 100%);\n  border: 1px solid rgba(0, 150, 255, 0.3);\n  color: #0066cc;\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n  box-shadow: 0 2px 8px rgba(0, 150, 255, 0.15);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.hostel-card[_ngcontent-%COMP%]:hover   .view-details[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(0, 150, 255, 0.4) 0%,\n      rgba(0, 120, 220, 0.35) 100%);\n  border-color: rgba(0, 150, 255, 0.5);\n  box-shadow: 0 4px 15px rgba(0, 150, 255, 0.3);\n  transform: translateX(-5px);\n}\n@media (max-width: 900px) {\n  .hostels-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n  .page-container[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .section-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1.5rem;\n    align-items: flex-start;\n  }\n  .hostel-card[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    max-width: 400px;\n  }\n}\n@media (max-width: 600px) {\n  .page-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .section-title[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n  .btn-primary[_ngcontent-%COMP%] {\n    padding: 0.6rem 1.2rem;\n    font-size: 0.9rem;\n  }\n}\n/*# sourceMappingURL=hostel-list.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HostelList, [{
    type: Component,
    args: [{ selector: "app-hostel-list", imports: [RouterLink], template: `<div class="page-container">\r
  <div class="page-header">\r
    <h1 class="section-title">\u0627\u0644\u0633\u0643\u0646\u0627\u062A \u0627\u0644\u0645\u062A\u0627\u062D\u0629</h1>\r
    @if (auth.isAdmin()) {\r
      <a routerLink="/admin" class="btn btn-primary">\r
        + \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0633\u0643\u0646\u0627\u062A\r
      </a>\r
    }\r
  </div>\r
\r
  @if (loading()) {\r
    <div class="loading-state">\r
      <div class="spinner"></div>\r
      <p>\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0633\u0643\u0646\u0627\u062A...</p>\r
    </div>\r
  } @else if (error()) {\r
    <div class="alert alert-error">{{ error() }}</div>\r
  } @else if (hostels().length === 0) {\r
    <div class="empty-state">\r
      <div class="empty-icon">&#127968;</div>\r
      <p>\u0644\u0627 \u062A\u0648\u062C\u062F \u0633\u0643\u0646\u0627\u062A \u0645\u062A\u0627\u062D\u0629 \u062D\u0627\u0644\u064A\u0627\u064B</p>\r
    </div>\r
  } @else {\r
    <div class="hostels-grid">\r
      @for (hostel of hostels(); track hostel.hostelName) {\r
        <a [routerLink]="['/hostels', hostel.hostelName]" class="hostel-card card">\r
          <div class="hostel-image">\r
            @if (hostel.imageUrls && hostel.imageUrls.length > 0) {\r
              <img [src]="hostel.imageUrls[0]" [alt]="hostel.hostelName" />\r
            } @else {\r
              <div class="no-image">&#127968;</div>\r
            }\r
          </div>\r
          <div class="hostel-info">\r
            <h3 class="hostel-name">{{ hostel.hostelName }}</h3>\r
            <p class="hostel-location">&#128205; {{ hostel.location }}</p>\r
\r
            <div class="occupancy">\r
              <div class="occupancy-labels">\r
                <span>\u0627\u0644\u0625\u0634\u063A\u0627\u0644</span>\r
                <span>{{ hostel.currentResidents }} / {{ hostel.capacity }}</span>\r
              </div>\r
              <div class="occupancy-bar">\r
                <div\r
                  class="occupancy-fill"\r
                  [class]="getOccupancyClass(hostel)"\r
                  [style.width]="getOccupancyPercent(hostel) + '%'">\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="hostel-footer">\r
              <span class="occupancy-badge" [class]="'badge-' + getOccupancyClass(hostel)">\r
                @if (getOccupancyPercent(hostel) >= 100) {\r
                  \u0645\u0645\u062A\u0644\u0626\r
                } @else if (getOccupancyPercent(hostel) >= 60) {\r
                  \u0634\u0628\u0647 \u0645\u0645\u062A\u0644\u0626\r
                } @else {\r
                  \u0645\u062A\u0627\u062D\r
                }\r
              </span>\r
              <span class="view-details">\u0639\u0631\u0636 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 &rarr;</span>\r
            </div>\r
          </div>\r
        </a>\r
      }\r
    </div>\r
  }\r
</div>`, styles: ['/* src/app/components/hostel-list/hostel-list.css */\n.page-container {\n  padding: 2.5rem;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  background:\n    radial-gradient(\n      circle at 20% 80%,\n      rgba(0, 200, 255, 0.15) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 20%,\n      rgba(100, 255, 200, 0.15) 0%,\n      transparent 50%),\n    linear-gradient(\n      180deg,\n      #c7e9ff 0%,\n      #e0f4ff 30%,\n      #f0f9ff 60%,\n      #e8f5ff 100%);\n  min-height: 100vh;\n  direction: rtl;\n  position: relative;\n  overflow: hidden;\n}\n.page-container::before {\n  content: "";\n  position: fixed;\n  width: 300px;\n  height: 300px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(0, 200, 255, 0.2) 0%,\n      rgba(100, 230, 255, 0.1) 40%,\n      transparent 70%);\n  border-radius: 50%;\n  top: -100px;\n  right: 10%;\n  animation: float-bubble 15s ease-in-out infinite;\n  pointer-events: none;\n}\n.page-container::after {\n  content: "";\n  position: fixed;\n  width: 400px;\n  height: 400px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(100, 255, 200, 0.15) 0%,\n      rgba(150, 255, 220, 0.08) 50%,\n      transparent 70%);\n  border-radius: 50%;\n  bottom: -150px;\n  left: 5%;\n  animation: float-bubble 20s ease-in-out infinite reverse;\n  pointer-events: none;\n}\n@keyframes float-bubble {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  33% {\n    transform: translate(30px, -40px) scale(1.05);\n  }\n  66% {\n    transform: translate(-20px, -20px) scale(0.95);\n  }\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 3rem;\n  position: relative;\n  z-index: 1;\n}\n.section-title {\n  font-size: 2.5rem;\n  font-weight: 700;\n  background:\n    linear-gradient(\n      135deg,\n      #0066cc 0%,\n      #0099ff 50%,\n      #00ccff 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  filter: drop-shadow(0 2px 8px rgba(0, 150, 255, 0.4)) drop-shadow(0 4px 15px rgba(0, 200, 255, 0.2));\n  letter-spacing: 1px;\n  position: relative;\n}\n.section-title::after {\n  content: "";\n  position: absolute;\n  bottom: -8px;\n  left: 0;\n  width: 100px;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #0096ff 0%,\n      rgba(0, 200, 255, 0.5) 100%);\n  border-radius: 2px;\n  box-shadow: 0 2px 8px rgba(0, 150, 255, 0.4);\n}\n.btn-primary {\n  padding: 0.8rem 1.8rem;\n  border-radius: 18px;\n  text-decoration: none;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(0, 150, 255, 0.95) 0%,\n      rgba(0, 120, 220, 0.9) 50%,\n      rgba(0, 100, 200, 0.95) 100%);\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top: 2px solid rgba(255, 255, 255, 0.6);\n  color: #fff;\n  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n  box-shadow: 0 6px 20px rgba(0, 150, 255, 0.4), 0 2px 5px rgba(255, 255, 255, 0.3) inset;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.btn-primary::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.3) 0%,\n      transparent 100%);\n  pointer-events: none;\n}\n.btn-primary:hover {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(0, 180, 255, 1) 0%,\n      rgba(0, 150, 235, 0.95) 50%,\n      rgba(0, 120, 220, 1) 100%);\n  transform: translateY(-3px);\n  box-shadow: 0 8px 30px rgba(0, 150, 255, 0.5), 0 3px 8px rgba(255, 255, 255, 0.4) inset;\n}\n.loading-state,\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 5rem 0;\n  gap: 1.5rem;\n  position: relative;\n  z-index: 1;\n}\n.spinner {\n  width: 60px;\n  height: 60px;\n  border: 5px solid rgba(0, 150, 255, 0.15);\n  border-top: 5px solid #0096ff;\n  border-right: 5px solid #00c8ff;\n  border-radius: 50%;\n  animation: spin 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  box-shadow: 0 4px 15px rgba(0, 150, 255, 0.3), 0 0 0 8px rgba(0, 150, 255, 0.05);\n  position: relative;\n}\n.spinner::after {\n  content: "";\n  position: absolute;\n  inset: 8px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(0, 200, 255, 0.2) 0%,\n      transparent 70%);\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-icon {\n  font-size: 5rem;\n  filter: drop-shadow(0 4px 15px rgba(0, 150, 255, 0.3));\n  background:\n    linear-gradient(\n      135deg,\n      #0096ff 0%,\n      #00c8ff 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.loading-state p,\n.empty-state p {\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: #0066cc;\n  text-shadow: 0 1px 3px rgba(255, 255, 255, 0.8);\n}\n.hostels-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 2.5rem;\n  position: relative;\n  z-index: 1;\n}\n.hostel-card {\n  display: flex;\n  flex-direction: column;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.7) 0%,\n      rgba(240, 250, 255, 0.6) 50%,\n      rgba(230, 245, 255, 0.7) 100%);\n  backdrop-filter: blur(20px) saturate(180%);\n  -webkit-backdrop-filter: blur(20px) saturate(180%);\n  border-radius: 24px;\n  border: 2px solid rgba(255, 255, 255, 0.6);\n  border-top: 3px solid rgba(255, 255, 255, 0.9);\n  overflow: hidden;\n  box-shadow:\n    0 8px 32px rgba(0, 150, 255, 0.15),\n    0 2px 8px rgba(255, 255, 255, 0.5) inset,\n    0 15px 45px rgba(0, 100, 200, 0.1);\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  text-decoration: none;\n  color: #1a1a1a;\n  position: relative;\n  overflow: visible;\n}\n.hostel-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 40%;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.4) 0%,\n      transparent 100%);\n  pointer-events: none;\n  border-radius: 24px 24px 0 0;\n  z-index: 1;\n}\n.hostel-card::after {\n  content: "";\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(0, 200, 255, 0.3) 0%,\n      transparent 70%);\n  border-radius: 50%;\n  top: -30px;\n  right: -30px;\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity 0.4s;\n}\n.hostel-card:hover {\n  transform: translateY(-8px) scale(1.02);\n  box-shadow:\n    0 15px 50px rgba(0, 150, 255, 0.3),\n    0 3px 15px rgba(255, 255, 255, 0.6) inset,\n    0 20px 60px rgba(0, 200, 255, 0.2);\n  border-color: rgba(255, 255, 255, 0.8);\n}\n.hostel-card:hover::after {\n  opacity: 1;\n}\n.hostel-image {\n  position: relative;\n  overflow: hidden;\n}\n.hostel-image img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n  position: relative;\n  z-index: 0;\n}\n.hostel-image::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 50%,\n      rgba(0, 150, 255, 0.05) 100%);\n  pointer-events: none;\n}\n.no-image {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 200px;\n  font-size: 3.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(0, 150, 255, 0.2) 0%,\n      rgba(100, 200, 255, 0.15) 50%,\n      rgba(0, 180, 255, 0.2) 100%);\n  border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n  color: #0096ff;\n  filter: drop-shadow(0 2px 8px rgba(0, 150, 255, 0.3));\n}\n.hostel-info {\n  padding: 1.3rem 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n  position: relative;\n  z-index: 2;\n}\n.hostel-name {\n  font-size: 1.4rem;\n  font-weight: 700;\n  background:\n    linear-gradient(\n      135deg,\n      #0066cc 0%,\n      #0099ff 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  filter: drop-shadow(0 1px 3px rgba(0, 100, 200, 0.2));\n  letter-spacing: 0.3px;\n}\n.hostel-location {\n  font-size: 1rem;\n  color: #2d5a7b;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n}\n.occupancy-labels {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #2d5a7b;\n}\n.occupancy-bar {\n  width: 100%;\n  height: 14px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(200, 220, 240, 0.4) 0%,\n      rgba(220, 235, 250, 0.3) 100%);\n  border: 1px solid rgba(0, 100, 200, 0.15);\n  border-radius: 10px;\n  overflow: hidden;\n  margin-top: 0.5rem;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05) inset, 0 1px 2px rgba(255, 255, 255, 0.5);\n  position: relative;\n}\n.occupancy-bar::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.4) 0%,\n      transparent 100%);\n  pointer-events: none;\n}\n.occupancy-fill {\n  height: 100%;\n  border-radius: 10px;\n  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.occupancy-fill::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.4) 0%,\n      transparent 100%);\n  border-radius: 10px 10px 0 0;\n}\n.available {\n  background:\n    linear-gradient(\n      135deg,\n      #28d96a 0%,\n      #20c463 100%);\n}\n.semi-full {\n  background:\n    linear-gradient(\n      135deg,\n      #ffd54f 0%,\n      #ffc107 100%);\n}\n.full {\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b6b 0%,\n      #dc3545 100%);\n}\n.hostel-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 1.2rem;\n  position: relative;\n  z-index: 2;\n}\n.occupancy-badge {\n  font-weight: 700;\n  padding: 0.5rem 1rem;\n  border-radius: 15px;\n  font-size: 0.85rem;\n  color: #fff;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top: 2px solid rgba(255, 255, 255, 0.6);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(255, 255, 255, 0.3) inset;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n  position: relative;\n  overflow: hidden;\n}\n.occupancy-badge::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.3) 0%,\n      transparent 100%);\n  pointer-events: none;\n}\n.badge-available {\n  background:\n    linear-gradient(\n      180deg,\n      #28d96a 0%,\n      #20c463 100%);\n}\n.badge-semi-full {\n  background:\n    linear-gradient(\n      180deg,\n      #ffd54f 0%,\n      #ffc107 100%);\n  color: #4a3c00;\n}\n.badge-full {\n  background:\n    linear-gradient(\n      180deg,\n      #ff6b6b 0%,\n      #dc3545 100%);\n}\n.view-details {\n  font-weight: 600;\n  padding: 0.5rem 1rem;\n  border-radius: 12px;\n  font-size: 0.9rem;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(0, 150, 255, 0.25) 0%,\n      rgba(0, 120, 220, 0.2) 100%);\n  border: 1px solid rgba(0, 150, 255, 0.3);\n  color: #0066cc;\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n  box-shadow: 0 2px 8px rgba(0, 150, 255, 0.15);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.hostel-card:hover .view-details {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(0, 150, 255, 0.4) 0%,\n      rgba(0, 120, 220, 0.35) 100%);\n  border-color: rgba(0, 150, 255, 0.5);\n  box-shadow: 0 4px 15px rgba(0, 150, 255, 0.3);\n  transform: translateX(-5px);\n}\n@media (max-width: 900px) {\n  .hostels-grid {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n  .page-container {\n    padding: 1.5rem;\n  }\n  .section-title {\n    font-size: 2rem;\n  }\n  .page-header {\n    flex-direction: column;\n    gap: 1.5rem;\n    align-items: flex-start;\n  }\n  .hostel-card {\n    margin: 0 auto;\n    max-width: 400px;\n  }\n}\n@media (max-width: 600px) {\n  .page-container {\n    padding: 1rem;\n  }\n  .section-title {\n    font-size: 1.6rem;\n  }\n  .btn-primary {\n    padding: 0.6rem 1.2rem;\n    font-size: 0.9rem;\n  }\n}\n/*# sourceMappingURL=hostel-list.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HostelList, { className: "HostelList", filePath: "src/app/components/hostel-list/hostel-list.ts", lineNumber: 12 });
})();
export {
  HostelList
};
//# sourceMappingURL=chunk-VXSARJRH.js.map
