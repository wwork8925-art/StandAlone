import {
  FormsModule
} from "./chunk-5KVMPLSD.js";
import {
  RequestService
} from "./chunk-Z4QYJ74F.js";
import {
  RouterLink
} from "./chunk-GZWQ6LDC.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-267HQEHF.js";

// src/app/components/generalview/generalview.ts
var Generalview = class _Generalview {
  requestService = inject(RequestService);
  cdr = inject(ChangeDetectorRef);
  userCount;
  ngOnInit() {
    this.loadUserCount();
  }
  loadUserCount() {
    this.requestService.getUserCount().subscribe({
      next: (count) => {
        this.userCount = count;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error("Error fetching user count:", err);
      }
    });
  }
  refreshUserCount() {
    this.loadUserCount();
  }
  static \u0275fac = function Generalview_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Generalview)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Generalview, selectors: [["app-generalview"]], decls: 12, vars: 1, consts: [[1, "card"]], template: function Generalview_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "p");
      \u0275\u0275text(1, "\u0645\u0631\u062D\u0628\u0627\u064F \u0628\u0643\u0645 \u0635\u0641\u062D\u0629 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0639\u0627\u0645\u0647\n");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(2, "p");
      \u0275\u0275text(3, "\u0641\u064A \u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062D\u0629\u060C \u0633\u062A\u062C\u062F\u0648\u0646 \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0639\u0627\u0645\u0629 \u062D\u0648\u0644 \u062E\u062F\u0645\u0627\u062A\u0646\u0627 \u0648\u0643\u064A\u0641\u064A\u0629 \u0627\u0644\u0627\u0633\u062A\u0641\u0627\u062F\u0629 \u0645\u0646\u0647\u0627. \u0646\u062D\u0646 \u0645\u0644\u062A\u0632\u0645\u0648\u0646 \u0628\u062A\u0642\u062F\u064A\u0645 \u0623\u0641\u0636\u0644 \u062A\u062C\u0631\u0628\u0629 \u0645\u0645\u0643\u0646\u0629 \u0644\u0632\u0648\u0627\u0631\u0646\u0627\u060C \u0648\u0646\u0633\u0639\u0649 \u062C\u0627\u0647\u062F\u064A\u0646 \u0644\u062A\u0648\u0641\u064A\u0631 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u062D\u062A\u0627\u062C\u0648\u0646\u0647\u0627 \u0628\u0633\u0647\u0648\u0644\u0629 \u0648\u064A\u0633\u0631. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "p");
      \u0275\u0275text(5, "\u0639\u062F\u062F \u0627\u0644\u0633\u0643\u0646\u0627\u062A \u0627\u0644\u0643\u0644\u064A ");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(6, " \u064B");
      \u0275\u0275domElementStart(7, "div", 0)(8, "h2");
      \u0275\u0275text(9);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(10, "p");
      \u0275\u0275text(11, "\u0639\u062F\u062F \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646 \u0627\u0644\u0645\u0633\u062C\u0644\u064A\u0646");
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.userCount);
    }
  }, dependencies: [CommonModule, FormsModule], styles: ['\n\n.general-view-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 30px auto;\n  padding: 20px;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.view-title[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  font-weight: 600;\n  margin-bottom: 40px;\n  text-align: center;\n  background:\n    linear-gradient(\n      135deg,\n      #0066cc 0%,\n      #0099ff 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 24px;\n  margin-bottom: 40px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.85) 0%,\n      rgba(240, 248, 255, 0.82) 100%);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-radius: 20px;\n  border: 1px solid rgba(0, 150, 255, 0.2);\n  padding: 32px 28px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  position: relative;\n  overflow: hidden;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n}\n.stat-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.3) 0%,\n      transparent 100%);\n  pointer-events: none;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 12px 40px rgba(0, 102, 204, 0.2);\n  border-color: rgba(0, 150, 255, 0.35);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 16px;\n  filter: drop-shadow(0 2px 8px rgba(0, 102, 204, 0.2));\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #555;\n  margin-bottom: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 700;\n  background:\n    linear-gradient(\n      135deg,\n      #0066cc 0%,\n      #0099ff 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  line-height: 1.2;\n}\n.info-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.85) 0%,\n      rgba(240, 248, 255, 0.82) 100%);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-radius: 20px;\n  border: 1px solid rgba(0, 150, 255, 0.15);\n  padding: 32px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  position: relative;\n  overflow: hidden;\n}\n.info-section[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.3) 0%,\n      transparent 100%);\n  pointer-events: none;\n}\n.info-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 600;\n  margin-bottom: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #0066cc 0%,\n      #0099ff 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  border-bottom: 2px solid rgba(0, 150, 255, 0.2);\n  padding-bottom: 12px;\n}\n.info-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  line-height: 1.7;\n  color: #444;\n  margin-bottom: 16px;\n}\n@media (max-width: 768px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .stat-value[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .view-title[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n}\n/*# sourceMappingURL=generalview.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Generalview, [{
    type: Component,
    args: [{ selector: "app-generalview", imports: [CommonModule, FormsModule, RouterLink], template: '<p>\u0645\u0631\u062D\u0628\u0627\u064F \u0628\u0643\u0645 \u0635\u0641\u062D\u0629 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0639\u0627\u0645\u0647\r\n</p>\r\n<p>\u0641\u064A \u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062D\u0629\u060C \u0633\u062A\u062C\u062F\u0648\u0646 \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0639\u0627\u0645\u0629 \u062D\u0648\u0644 \u062E\u062F\u0645\u0627\u062A\u0646\u0627 \u0648\u0643\u064A\u0641\u064A\u0629 \u0627\u0644\u0627\u0633\u062A\u0641\u0627\u062F\u0629 \u0645\u0646\u0647\u0627. \u0646\u062D\u0646 \u0645\u0644\u062A\u0632\u0645\u0648\u0646 \u0628\u062A\u0642\u062F\u064A\u0645 \u0623\u0641\u0636\u0644 \u062A\u062C\u0631\u0628\u0629 \u0645\u0645\u0643\u0646\u0629 \u0644\u0632\u0648\u0627\u0631\u0646\u0627\u060C \u0648\u0646\u0633\u0639\u0649 \u062C\u0627\u0647\u062F\u064A\u0646 \u0644\u062A\u0648\u0641\u064A\u0631 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u062D\u062A\u0627\u062C\u0648\u0646\u0647\u0627 \u0628\u0633\u0647\u0648\u0644\u0629 \u0648\u064A\u0633\u0631.\r\n\r\n</p>\r\n\r\n<p>\u0639\u062F\u062F \u0627\u0644\u0633\u0643\u0646\u0627\u062A \u0627\u0644\u0643\u0644\u064A \r\n</p>\r\n\r\n\r\n\r\n\u064B<div class="card">\r\n  <h2>{{ userCount }}</h2>\r\n  <p>\u0639\u062F\u062F \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646 \u0627\u0644\u0645\u0633\u062C\u0644\u064A\u0646</p>\r\n  <!-- \u0632\u0631 \u0644\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0639\u062F\u062F \u064A\u062F\u0648\u064A\u0627\u064B -->\r\n</div>', styles: ['/* src/app/components/generalview/generalview.css */\n.general-view-container {\n  max-width: 1200px;\n  margin: 30px auto;\n  padding: 20px;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.view-title {\n  font-size: 2.2rem;\n  font-weight: 600;\n  margin-bottom: 40px;\n  text-align: center;\n  background:\n    linear-gradient(\n      135deg,\n      #0066cc 0%,\n      #0099ff 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 24px;\n  margin-bottom: 40px;\n}\n.stat-card {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.85) 0%,\n      rgba(240, 248, 255, 0.82) 100%);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-radius: 20px;\n  border: 1px solid rgba(0, 150, 255, 0.2);\n  padding: 32px 28px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  position: relative;\n  overflow: hidden;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n}\n.stat-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.3) 0%,\n      transparent 100%);\n  pointer-events: none;\n}\n.stat-card:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 12px 40px rgba(0, 102, 204, 0.2);\n  border-color: rgba(0, 150, 255, 0.35);\n}\n.stat-icon {\n  font-size: 3rem;\n  margin-bottom: 16px;\n  filter: drop-shadow(0 2px 8px rgba(0, 102, 204, 0.2));\n}\n.stat-label {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #555;\n  margin-bottom: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.stat-value {\n  font-size: 3rem;\n  font-weight: 700;\n  background:\n    linear-gradient(\n      135deg,\n      #0066cc 0%,\n      #0099ff 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  line-height: 1.2;\n}\n.info-section {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.85) 0%,\n      rgba(240, 248, 255, 0.82) 100%);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-radius: 20px;\n  border: 1px solid rgba(0, 150, 255, 0.15);\n  padding: 32px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  position: relative;\n  overflow: hidden;\n}\n.info-section::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.3) 0%,\n      transparent 100%);\n  pointer-events: none;\n}\n.info-section h2 {\n  font-size: 1.8rem;\n  font-weight: 600;\n  margin-bottom: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #0066cc 0%,\n      #0099ff 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  border-bottom: 2px solid rgba(0, 150, 255, 0.2);\n  padding-bottom: 12px;\n}\n.info-section p {\n  font-size: 1.05rem;\n  line-height: 1.7;\n  color: #444;\n  margin-bottom: 16px;\n}\n@media (max-width: 768px) {\n  .stats-grid {\n    grid-template-columns: 1fr;\n  }\n  .stat-value {\n    font-size: 2.5rem;\n  }\n  .view-title {\n    font-size: 1.8rem;\n  }\n}\n/*# sourceMappingURL=generalview.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Generalview, { className: "Generalview", filePath: "src/app/components/generalview/generalview.ts", lineNumber: 13 });
})();
export {
  Generalview
};
//# sourceMappingURL=chunk-SAWIJNZY.js.map
