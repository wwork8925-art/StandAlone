import {
  RequestService
} from "./chunk-Z4QYJ74F.js";
import {
  RouterLink
} from "./chunk-GZWQ6LDC.js";
import {
  CommonModule,
  Component,
  DatePipe,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-267HQEHF.js";

// src/app/components/dash/dash.ts
function Dash_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...");
    \u0275\u0275elementEnd();
  }
}
function Dash_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 3);
    \u0275\u0275text(4, "\u062A\u0635\u0641\u062D \u0627\u0644\u0633\u0643\u0646\u0627\u062A \u0644\u062A\u0642\u062F\u064A\u0645 \u0637\u0644\u0628");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.errorMsg());
  }
}
function Dash_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2705 ");
  }
}
function Dash_Conditional_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u274C ");
  }
}
function Dash_Conditional_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u23F3 ");
  }
}
function Dash_Conditional_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u062A\u0645\u062A \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 \u0639\u0644\u0649 \u0637\u0644\u0628\u0643 ");
  }
}
function Dash_Conditional_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u062A\u0645 \u0631\u0641\u0636 \u0637\u0644\u0628\u0643 ");
  }
}
function Dash_Conditional_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u0637\u0644\u0628\u0643 \u0642\u064A\u062F \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629 ");
  }
}
function Dash_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5);
    \u0275\u0275conditionalCreate(2, Dash_Conditional_5_Conditional_2_Template, 1, 0)(3, Dash_Conditional_5_Conditional_3_Template, 1, 0)(4, Dash_Conditional_5_Conditional_4_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 6)(6, "p", 7);
    \u0275\u0275conditionalCreate(7, Dash_Conditional_5_Conditional_7_Template, 1, 0)(8, Dash_Conditional_5_Conditional_8_Template, 1, 0)(9, Dash_Conditional_5_Conditional_9_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 8);
    \u0275\u0275text(11, "\u0627\u0644\u0633\u0643\u0646 \u0627\u0644\u0645\u0637\u0644\u0648\u0628: ");
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "p", 9);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("approved", ctx_r0.myRequest().status === "Approved")("rejected", ctx_r0.myRequest().status === "Rejected")("pending", ctx_r0.myRequest().status === "Pending");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.myRequest().status === "Approved" ? 2 : ctx_r0.myRequest().status === "Rejected" ? 3 : 4);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.myRequest().status === "Approved" ? 7 : ctx_r0.myRequest().status === "Rejected" ? 8 : 9);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.myRequest().hostelName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0637\u0644\u0628: ", \u0275\u0275pipeBind2(16, 10, ctx_r0.myRequest().createdAt, "mediumDate"));
  }
}
var Dash = class _Dash {
  requestService;
  // آخر طلب خاص بالمستخدم المسجل حالياً (ليس كل الطلبات)
  myRequest = signal(null, ...ngDevMode ? [{ debugName: "myRequest" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  // رسالة الخطأ إذا لم يوجد طلب أو فشل الاتصال
  errorMsg = signal(null, ...ngDevMode ? [{ debugName: "errorMsg" }] : []);
  constructor(requestService) {
    this.requestService = requestService;
  }
  ngOnInit() {
    this.requestService.getMyLatest().subscribe({
      next: (data) => {
        this.myRequest.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        if (err.status === 404) {
          this.errorMsg.set("\u0644\u0645 \u062A\u0642\u062F\u0645 \u0623\u064A \u0637\u0644\u0628 \u0633\u0643\u0646 \u0628\u0639\u062F.");
        } else {
          this.errorMsg.set("\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062C\u0644\u0628 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A.");
        }
        this.loading.set(false);
      }
    });
  }
  static \u0275fac = function Dash_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dash)(\u0275\u0275directiveInject(RequestService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Dash, selectors: [["app-dash"]], decls: 6, vars: 1, consts: [[1, "dash-container"], [1, "no-request-card"], [1, "request-status-card", 3, "approved", "rejected", "pending"], ["routerLink", "/hostels"], [1, "request-status-card"], [1, "status-icon"], [1, "status-info"], [1, "status-label"], [1, "hostel-name"], [1, "request-date"]], template: function Dash_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1");
      \u0275\u0275text(2, "\u062D\u0627\u0644\u0629 \u0637\u0644\u0628\u064A");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, Dash_Conditional_3_Template, 2, 0, "p")(4, Dash_Conditional_4_Template, 5, 1, "div", 1)(5, Dash_Conditional_5_Template, 17, 13, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading() ? 3 : ctx.errorMsg() ? 4 : ctx.myRequest() ? 5 : -1);
    }
  }, dependencies: [CommonModule, RouterLink, DatePipe], styles: ['\n\n.dash-container[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 30px auto;\n  padding: 20px;\n}\n.dash-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 600;\n  margin-bottom: 30px;\n  text-align: center;\n  background:\n    linear-gradient(\n      135deg,\n      #0066cc 0%,\n      #0099ff 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.request-status-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.85) 0%,\n      rgba(240, 248, 255, 0.82) 100%);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-radius: 18px;\n  border: 1px solid rgba(0, 150, 255, 0.2);\n  padding: 24px;\n  display: flex;\n  align-items: flex-start;\n  gap: 18px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 16px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.request-status-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.3) 0%,\n      transparent 100%);\n  pointer-events: none;\n}\n.request-status-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 12px 40px rgba(0, 102, 204, 0.15);\n}\n.request-status-card.approved[_ngcontent-%COMP%] {\n  border-color: rgba(40, 167, 69, 0.3);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(230, 255, 237, 0.88) 0%,\n      rgba(212, 250, 222, 0.85) 100%);\n}\n.request-status-card.rejected[_ngcontent-%COMP%] {\n  border-color: rgba(220, 53, 69, 0.3);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 235, 237, 0.88) 0%,\n      rgba(255, 220, 222, 0.85) 100%);\n}\n.request-status-card.pending[_ngcontent-%COMP%] {\n  border-color: rgba(255, 193, 7, 0.3);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 248, 225, 0.88) 0%,\n      rgba(255, 243, 205, 0.85) 100%);\n}\n.status-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15));\n}\n.status-label[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 8px;\n}\n.hostel-name[_ngcontent-%COMP%] {\n  color: #0066cc;\n  font-size: 1rem;\n  font-weight: 600;\n  margin-bottom: 6px;\n}\n.request-date[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 0.9rem;\n}\n.no-request-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.85) 0%,\n      rgba(240, 248, 255, 0.82) 100%);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-radius: 18px;\n  border: 1px solid rgba(0, 150, 255, 0.15);\n  padding: 40px;\n  text-align: center;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  position: relative;\n  overflow: hidden;\n}\n.no-request-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.3) 0%,\n      transparent 100%);\n  pointer-events: none;\n}\n.no-request-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 1.05rem;\n  margin-bottom: 16px;\n}\n.no-request-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0066cc;\n  font-weight: 600;\n  text-decoration: none;\n  transition: all 0.2s ease;\n}\n.no-request-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0099ff;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=dash.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dash, [{
    type: Component,
    args: [{ selector: "app-dash", imports: [CommonModule, RouterLink], template: `<div class="dash-container">\r
  <h1>\u062D\u0627\u0644\u0629 \u0637\u0644\u0628\u064A</h1>\r
\r
  <!-- \u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644 -->\r
  @if (loading()) {\r
    <p>\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...</p>\r
  }\r
\r
  <!-- \u0644\u0627 \u064A\u0648\u062C\u062F \u0637\u0644\u0628 \u0623\u0648 \u062E\u0637\u0623 -->\r
  @else if (errorMsg()) {\r
    <div class="no-request-card">\r
      <p>{{ errorMsg() }}</p>\r
      <a routerLink="/hostels">\u062A\u0635\u0641\u062D \u0627\u0644\u0633\u0643\u0646\u0627\u062A \u0644\u062A\u0642\u062F\u064A\u0645 \u0637\u0644\u0628</a>\r
    </div>\r
  }\r
\r
  <!-- \u0639\u0631\u0636 \u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628 \u0627\u0644\u062E\u0627\u0635 \u0628\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 -->\r
  @else if (myRequest()) {\r
    <div class="request-status-card"\r
      [class.approved]="myRequest()!.status === 'Approved'"\r
      [class.rejected]="myRequest()!.status === 'Rejected'"\r
      [class.pending]="myRequest()!.status === 'Pending'"\r
    >\r
      <div class="status-icon">\r
        @if (myRequest()!.status === 'Approved')      { \u2705 }\r
        @else if (myRequest()!.status === 'Rejected') { \u274C }\r
        @else                                          { \u23F3 }\r
      </div>\r
\r
      <div class="status-info">\r
        <p class="status-label">\r
          @if (myRequest()!.status === 'Approved')      { \u062A\u0645\u062A \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 \u0639\u0644\u0649 \u0637\u0644\u0628\u0643 }\r
          @else if (myRequest()!.status === 'Rejected') { \u062A\u0645 \u0631\u0641\u0636 \u0637\u0644\u0628\u0643 }\r
          @else                                          { \u0637\u0644\u0628\u0643 \u0642\u064A\u062F \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629 }\r
        </p>\r
        <p class="hostel-name">\u0627\u0644\u0633\u0643\u0646 \u0627\u0644\u0645\u0637\u0644\u0648\u0628: <strong>{{ myRequest()!.hostelName }}</strong></p>\r
        <p class="request-date">\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0637\u0644\u0628: {{ myRequest()!.createdAt | date:'mediumDate' }}</p>\r
      </div>\r
    </div>\r
  }\r
</div>`, styles: ['/* src/app/components/dash/dash.css */\n.dash-container {\n  max-width: 900px;\n  margin: 30px auto;\n  padding: 20px;\n}\n.dash-container h1 {\n  font-size: 2rem;\n  font-weight: 600;\n  margin-bottom: 30px;\n  text-align: center;\n  background:\n    linear-gradient(\n      135deg,\n      #0066cc 0%,\n      #0099ff 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.request-status-card {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.85) 0%,\n      rgba(240, 248, 255, 0.82) 100%);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-radius: 18px;\n  border: 1px solid rgba(0, 150, 255, 0.2);\n  padding: 24px;\n  display: flex;\n  align-items: flex-start;\n  gap: 18px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 16px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.request-status-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.3) 0%,\n      transparent 100%);\n  pointer-events: none;\n}\n.request-status-card:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 12px 40px rgba(0, 102, 204, 0.15);\n}\n.request-status-card.approved {\n  border-color: rgba(40, 167, 69, 0.3);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(230, 255, 237, 0.88) 0%,\n      rgba(212, 250, 222, 0.85) 100%);\n}\n.request-status-card.rejected {\n  border-color: rgba(220, 53, 69, 0.3);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 235, 237, 0.88) 0%,\n      rgba(255, 220, 222, 0.85) 100%);\n}\n.request-status-card.pending {\n  border-color: rgba(255, 193, 7, 0.3);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 248, 225, 0.88) 0%,\n      rgba(255, 243, 205, 0.85) 100%);\n}\n.status-icon {\n  font-size: 2.5rem;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15));\n}\n.status-label {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 8px;\n}\n.hostel-name {\n  color: #0066cc;\n  font-size: 1rem;\n  font-weight: 600;\n  margin-bottom: 6px;\n}\n.request-date {\n  color: #666;\n  font-size: 0.9rem;\n}\n.no-request-card {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.85) 0%,\n      rgba(240, 248, 255, 0.82) 100%);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-radius: 18px;\n  border: 1px solid rgba(0, 150, 255, 0.15);\n  padding: 40px;\n  text-align: center;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  position: relative;\n  overflow: hidden;\n}\n.no-request-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.3) 0%,\n      transparent 100%);\n  pointer-events: none;\n}\n.no-request-card p {\n  color: #333;\n  font-size: 1.05rem;\n  margin-bottom: 16px;\n}\n.no-request-card a {\n  color: #0066cc;\n  font-weight: 600;\n  text-decoration: none;\n  transition: all 0.2s ease;\n}\n.no-request-card a:hover {\n  color: #0099ff;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=dash.css.map */\n'] }]
  }], () => [{ type: RequestService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Dash, { className: "Dash", filePath: "src/app/components/dash/dash.ts", lineNumber: 12 });
})();
export {
  Dash
};
//# sourceMappingURL=chunk-CPOGDI6X.js.map
