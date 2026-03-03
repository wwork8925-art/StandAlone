import {
  AuthService
} from "./chunk-XUII3OT7.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-5KVMPLSD.js";
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
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-267HQEHF.js";

// src/app/components/register/register.ts
function Register_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function Register_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.imagePreview(), \u0275\u0275sanitizeUrl);
  }
}
function Register_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u062C\u0627\u0631\u064A \u0627\u0644\u0631\u0641\u0639... ");
  }
}
function Register_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u0627\u062E\u062A\u0631 \u0635\u0648\u0631\u0629 ");
  }
}
function Register_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "\u2713 \u062A\u0645 \u0627\u0644\u0631\u0641\u0639");
    \u0275\u0275elementEnd();
  }
}
function Register_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 25);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u0633\u062C\u064A\u0644...");
    \u0275\u0275elementEnd();
  }
}
function Register_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062D\u0633\u0627\u0628 ");
  }
}
var Register = class _Register {
  auth = inject(AuthService);
  router = inject(Router);
  username = "";
  password = "";
  civilNumber = "";
  phoneNumber = "";
  profileImageUrl = "";
  selectedFile = null;
  imagePreview = signal("", ...ngDevMode ? [{ debugName: "imagePreview" }] : []);
  uploading = signal(false, ...ngDevMode ? [{ debugName: "uploading" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  onFileSelected(event) {
    const input = event.target;
    if (!input.files?.length)
      return;
    const file = input.files[0];
    this.selectedFile = file;
    const reader = new FileReader();
    reader.onload = (e) => this.imagePreview.set(e.target?.result);
    reader.readAsDataURL(file);
    this.uploading.set(true);
    this.profileImageUrl = "";
    this.auth.uploadProfileImage(file).subscribe({
      next: (res) => {
        this.profileImageUrl = res.imageUrl;
        this.uploading.set(false);
      },
      error: (err) => {
        this.error.set(err?.error?.message ?? "\u062E\u0637\u0623 \u0641\u064A \u0631\u0641\u0639 \u0627\u0644\u0635\u0648\u0631\u0629");
        this.uploading.set(false);
      }
    });
  }
  submit() {
    if (!this.username.trim() || !this.password || !this.civilNumber.trim() || !this.phoneNumber.trim()) {
      this.error.set("\u064A\u0631\u062C\u0649 \u062A\u0639\u0628\u0626\u0629 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629");
      return;
    }
    this.loading.set(true);
    this.error.set("");
    this.auth.register({
      username: this.username.trim(),
      password: this.password,
      civilNumber: this.civilNumber.trim(),
      number: this.phoneNumber.trim(),
      profileImageUrl: this.profileImageUrl
    }).subscribe({
      next: () => this.router.navigate(["/hostels"]),
      error: (err) => {
        this.error.set(err?.error?.message ?? "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u062A\u0633\u062C\u064A\u0644");
        this.loading.set(false);
      }
    });
  }
  static \u0275fac = function Register_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Register)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Register, selectors: [["app-register"]], decls: 46, vars: 12, consts: [[1, "auth-page"], [1, "auth-card"], [1, "auth-header"], [1, "auth-icon"], [1, "alert", "alert-error"], [3, "ngSubmit"], [1, "form-group"], [1, "image-upload-area"], ["alt", "preview", 1, "image-preview", 3, "src"], [1, "image-upload-controls"], ["type", "file", "accept", "image/*", "id", "profile-img", 2, "display", "none", 3, "change"], ["for", "profile-img", 1, "btn", "btn-secondary", "btn-sm"], [1, "success-badge"], ["for", "reg-username"], ["id", "reg-username", "type", "text", "name", "username", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645", "required", "", 3, "ngModelChange", "ngModel"], ["for", "reg-password"], ["id", "reg-password", "type", "password", "name", "password", "placeholder", "\u0623\u062F\u062E\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631", "required", "", 3, "ngModelChange", "ngModel"], [1, "form-row"], ["for", "civil"], ["id", "civil", "type", "text", "name", "civilNumber", "placeholder", "\u0631\u0642\u0645\u0643 \u0627\u0644\u0645\u062F\u0646\u064A", "required", "", 3, "ngModelChange", "ngModel"], ["for", "phone"], ["id", "phone", "type", "text", "name", "number", "placeholder", "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641", "required", "", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "btn-full", 3, "disabled"], [1, "auth-footer"], ["routerLink", "/login"], [1, "spinner-sm"]], template: function Register_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4, "\u{1F464}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1");
      \u0275\u0275text(6, "\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628 \u062C\u062F\u064A\u062F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p");
      \u0275\u0275text(8, "\u0627\u0646\u0636\u0645 \u0625\u0644\u0649 \u0646\u0638\u0627\u0645 \u0627\u0644\u0633\u0643\u0646\u0627\u062A");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(9, Register_Conditional_9_Template, 2, 1, "div", 4);
      \u0275\u0275elementStart(10, "form", 5);
      \u0275\u0275listener("ngSubmit", function Register_Template_form_ngSubmit_10_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(11, "div", 6)(12, "label");
      \u0275\u0275text(13, "\u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 7);
      \u0275\u0275conditionalCreate(15, Register_Conditional_15_Template, 1, 1, "img", 8);
      \u0275\u0275elementStart(16, "div", 9)(17, "input", 10);
      \u0275\u0275listener("change", function Register_Template_input_change_17_listener($event) {
        return ctx.onFileSelected($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "label", 11);
      \u0275\u0275conditionalCreate(19, Register_Conditional_19_Template, 1, 0)(20, Register_Conditional_20_Template, 1, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(21, Register_Conditional_21_Template, 2, 0, "span", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 6)(23, "label", 13);
      \u0275\u0275text(24, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "input", 14);
      \u0275\u0275twoWayListener("ngModelChange", function Register_Template_input_ngModelChange_25_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.username, $event) || (ctx.username = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 6)(27, "label", 15);
      \u0275\u0275text(28, "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function Register_Template_input_ngModelChange_29_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 17)(31, "div", 6)(32, "label", 18);
      \u0275\u0275text(33, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0645\u062F\u0646\u064A *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "input", 19);
      \u0275\u0275twoWayListener("ngModelChange", function Register_Template_input_ngModelChange_34_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.civilNumber, $event) || (ctx.civilNumber = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 6)(36, "label", 20);
      \u0275\u0275text(37, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "input", 21);
      \u0275\u0275twoWayListener("ngModelChange", function Register_Template_input_ngModelChange_38_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.phoneNumber, $event) || (ctx.phoneNumber = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "button", 22);
      \u0275\u0275conditionalCreate(40, Register_Conditional_40_Template, 3, 0)(41, Register_Conditional_41_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "p", 23);
      \u0275\u0275text(43, " \u0644\u062F\u064A\u0643 \u062D\u0633\u0627\u0628 \u0628\u0627\u0644\u0641\u0639\u0644\u061F; ");
      \u0275\u0275elementStart(44, "a", 24);
      \u0275\u0275text(45, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.error() ? 9 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.imagePreview() ? 15 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("disabled", ctx.uploading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.uploading() ? 19 : 20);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.profileImageUrl ? 21 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.username);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.civilNumber);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.phoneNumber);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading() || ctx.uploading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 40 : 41);
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterLink], styles: ['\n\n.auth-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 120px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  position: relative;\n  overflow: hidden;\n}\n.auth-page[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  width: 400px;\n  height: 400px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(0, 150, 255, 0.08) 0%,\n      transparent 70%);\n  border-radius: 50%;\n  top: -100px;\n  left: -100px;\n  pointer-events: none;\n}\n.auth-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.85) 0%,\n      rgba(245, 252, 255, 0.8) 100%);\n  -webkit-backdrop-filter: blur(20px) saturate(150%);\n  backdrop-filter: blur(20px) saturate(150%);\n  border-radius: 20px;\n  border: 2px solid rgba(255, 255, 255, 0.6);\n  border-top: 2px solid rgba(255, 255, 255, 0.9);\n  box-shadow: 0 10px 40px rgba(0, 100, 200, 0.12), 0 2px 8px rgba(255, 255, 255, 0.5) inset;\n  padding: 2.5rem;\n  width: 100%;\n  max-width: 520px;\n  position: relative;\n  z-index: 1;\n}\n.auth-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.3) 0%,\n      transparent 100%);\n  pointer-events: none;\n  border-radius: 20px 20px 0 0;\n}\n.auth-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n  position: relative;\n  z-index: 1;\n}\n.auth-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 0.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #0066cc 0%,\n      #0099ff 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  filter: drop-shadow(0 2px 4px rgba(0, 100, 200, 0.2));\n}\n.auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  background:\n    linear-gradient(\n      135deg,\n      #0066cc 0%,\n      #0099ff 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  margin-bottom: 0.5rem;\n}\n.auth-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #4a5568;\n  font-weight: 500;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.image-upload-area[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin: 1rem 0;\n}\n.image-preview[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 12px;\n  border: 2px solid rgba(0, 150, 255, 0.3);\n  object-fit: cover;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.image-upload-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  font-size: 0.85rem;\n  border-radius: 10px;\n  border: none;\n  font-weight: 600;\n  cursor: pointer;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(0, 120, 220, 0.9) 0%,\n      rgba(0, 100, 200, 0.85) 100%);\n  color: white;\n  box-shadow: 0 2px 8px rgba(0, 120, 220, 0.25);\n  transition: all 0.2s ease;\n}\n.btn-sm[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 120, 220, 0.35);\n}\nlabel.btn.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n.success-badge[_ngcontent-%COMP%] {\n  color: #0088cc;\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n.btn-full[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n  padding: 0.9rem 1.5rem;\n  font-size: 1rem;\n  font-weight: 600;\n  margin-top: 1.5rem;\n  border: none;\n  border-radius: 14px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(0, 120, 220, 0.95) 0%,\n      rgba(0, 100, 200, 0.9) 50%,\n      rgba(0, 80, 180, 0.95) 100%);\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  color: #fff;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 6px 20px rgba(0, 120, 220, 0.3), 0 2px 5px rgba(255, 255, 255, 0.2) inset;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.btn-full[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.3) 0%,\n      transparent 100%);\n  pointer-events: none;\n}\n.btn-full[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 120, 220, 0.4), 0 3px 8px rgba(255, 255, 255, 0.3) inset;\n}\n.btn-full[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.spinner-sm[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 3px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #ffffff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  display: inline-block;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.auth-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1.5rem;\n  color: #4a5568;\n  font-size: 0.95rem;\n  position: relative;\n  z-index: 1;\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0066cc;\n  font-weight: 600;\n  text-decoration: none;\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0096ff;\n  text-decoration: underline;\n}\n@media (max-width: 600px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .auth-card[_ngcontent-%COMP%] {\n    padding: 2rem 1.5rem;\n  }\n}\n/*# sourceMappingURL=register.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Register, [{
    type: Component,
    args: [{ selector: "app-register", imports: [FormsModule, RouterLink], template: '<div class="auth-page">\r\n  <div class="auth-card">\r\n    <div class="auth-header">\r\n      <div class="auth-icon">&#128100;</div>\r\n      <h1>\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628 \u062C\u062F\u064A\u062F</h1>\r\n      <p>\u0627\u0646\u0636\u0645 \u0625\u0644\u0649 \u0646\u0638\u0627\u0645 \u0627\u0644\u0633\u0643\u0646\u0627\u062A</p>\r\n    </div>\r\n\r\n    @if (error()) {\r\n      <div class="alert alert-error">{{ error() }}</div>\r\n    }\r\n\r\n    <form (ngSubmit)="submit()">\r\n      <!-- Profile Image -->\r\n      <div class="form-group">\r\n        <label>\u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)</label>\r\n        <div class="image-upload-area">\r\n          @if (imagePreview()) {\r\n            <img [src]="imagePreview()" alt="preview" class="image-preview" />\r\n          }\r\n          <div class="image-upload-controls">\r\n            <input\r\n              type="file"\r\n              accept="image/*"\r\n              (change)="onFileSelected($event)"\r\n              id="profile-img"\r\n              style="display:none"\r\n            />\r\n            <label for="profile-img" class="btn btn-secondary btn-sm" [class.disabled]="uploading()">\r\n              @if (uploading()) { \u062C\u0627\u0631\u064A \u0627\u0644\u0631\u0641\u0639... } @else { \u0627\u062E\u062A\u0631 \u0635\u0648\u0631\u0629 }\r\n            </label>\r\n            @if (profileImageUrl) {\r\n              <span class="success-badge">&#10003; \u062A\u0645 \u0627\u0644\u0631\u0641\u0639</span>\r\n            }\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label for="reg-username">\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 *</label>\r\n        <input\r\n          id="reg-username"\r\n          type="text"\r\n          [(ngModel)]="username"\r\n          name="username"\r\n          placeholder="\u0623\u062F\u062E\u0644 \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645"\r\n          required\r\n        />\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label for="reg-password">\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 *</label>\r\n        <input\r\n          id="reg-password"\r\n          type="password"\r\n          [(ngModel)]="password"\r\n          name="password"\r\n          placeholder="\u0623\u062F\u062E\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"\r\n          required\r\n        />\r\n      </div>\r\n\r\n      <div class="form-row">\r\n        <div class="form-group">\r\n          <label for="civil">\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0645\u062F\u0646\u064A *</label>\r\n          <input\r\n            id="civil"\r\n            type="text"\r\n            [(ngModel)]="civilNumber"\r\n            name="civilNumber"\r\n            placeholder="\u0631\u0642\u0645\u0643 \u0627\u0644\u0645\u062F\u0646\u064A"\r\n            required\r\n          />\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label for="phone">\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 *</label>\r\n          <input\r\n            id="phone"\r\n            type="text"\r\n            [(ngModel)]="phoneNumber"\r\n            name="number"\r\n            placeholder="\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641"\r\n            required\r\n          />\r\n        </div>\r\n      </div>\r\n\r\n      <button type="submit" class="btn btn-primary btn-full" [disabled]="loading() || uploading()">\r\n        @if (loading()) {\r\n          <span class="spinner-sm"></span>\r\n          <span>\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u0633\u062C\u064A\u0644...</span>\r\n        } @else {\r\n          \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062D\u0633\u0627\u0628\r\n        }\r\n      </button>\r\n    </form>\r\n\r\n    <p class="auth-footer">\r\n      \u0644\u062F\u064A\u0643 \u062D\u0633\u0627\u0628 \u0628\u0627\u0644\u0641\u0639\u0644\u061F; <a routerLink="/login">\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644</a>\r\n    </p>\r\n  </div>\r\n</div>\r\n', styles: ['/* src/app/components/register/register.css */\n.auth-page {\n  min-height: calc(100vh - 120px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  position: relative;\n  overflow: hidden;\n}\n.auth-page::before {\n  content: "";\n  position: absolute;\n  width: 400px;\n  height: 400px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(0, 150, 255, 0.08) 0%,\n      transparent 70%);\n  border-radius: 50%;\n  top: -100px;\n  left: -100px;\n  pointer-events: none;\n}\n.auth-card {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.85) 0%,\n      rgba(245, 252, 255, 0.8) 100%);\n  -webkit-backdrop-filter: blur(20px) saturate(150%);\n  backdrop-filter: blur(20px) saturate(150%);\n  border-radius: 20px;\n  border: 2px solid rgba(255, 255, 255, 0.6);\n  border-top: 2px solid rgba(255, 255, 255, 0.9);\n  box-shadow: 0 10px 40px rgba(0, 100, 200, 0.12), 0 2px 8px rgba(255, 255, 255, 0.5) inset;\n  padding: 2.5rem;\n  width: 100%;\n  max-width: 520px;\n  position: relative;\n  z-index: 1;\n}\n.auth-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.3) 0%,\n      transparent 100%);\n  pointer-events: none;\n  border-radius: 20px 20px 0 0;\n}\n.auth-header {\n  text-align: center;\n  margin-bottom: 2rem;\n  position: relative;\n  z-index: 1;\n}\n.auth-icon {\n  font-size: 2.5rem;\n  margin-bottom: 0.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #0066cc 0%,\n      #0099ff 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  filter: drop-shadow(0 2px 4px rgba(0, 100, 200, 0.2));\n}\n.auth-header h1 {\n  font-size: 1.8rem;\n  font-weight: 700;\n  background:\n    linear-gradient(\n      135deg,\n      #0066cc 0%,\n      #0099ff 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  margin-bottom: 0.5rem;\n}\n.auth-header p {\n  font-size: 0.95rem;\n  color: #4a5568;\n  font-weight: 500;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.image-upload-area {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin: 1rem 0;\n}\n.image-preview {\n  width: 64px;\n  height: 64px;\n  border-radius: 12px;\n  border: 2px solid rgba(0, 150, 255, 0.3);\n  object-fit: cover;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.image-upload-controls {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.btn-sm {\n  padding: 0.5rem 1rem;\n  font-size: 0.85rem;\n  border-radius: 10px;\n  border: none;\n  font-weight: 600;\n  cursor: pointer;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(0, 120, 220, 0.9) 0%,\n      rgba(0, 100, 200, 0.85) 100%);\n  color: white;\n  box-shadow: 0 2px 8px rgba(0, 120, 220, 0.25);\n  transition: all 0.2s ease;\n}\n.btn-sm:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 120, 220, 0.35);\n}\nlabel.btn.disabled {\n  opacity: 0.5;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n.success-badge {\n  color: #0088cc;\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n.btn-full {\n  width: 100%;\n  justify-content: center;\n  padding: 0.9rem 1.5rem;\n  font-size: 1rem;\n  font-weight: 600;\n  margin-top: 1.5rem;\n  border: none;\n  border-radius: 14px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(0, 120, 220, 0.95) 0%,\n      rgba(0, 100, 200, 0.9) 50%,\n      rgba(0, 80, 180, 0.95) 100%);\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  color: #fff;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 6px 20px rgba(0, 120, 220, 0.3), 0 2px 5px rgba(255, 255, 255, 0.2) inset;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.btn-full::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.3) 0%,\n      transparent 100%);\n  pointer-events: none;\n}\n.btn-full:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 120, 220, 0.4), 0 3px 8px rgba(255, 255, 255, 0.3) inset;\n}\n.btn-full:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.spinner-sm {\n  width: 16px;\n  height: 16px;\n  border: 3px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #ffffff;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n  display: inline-block;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.auth-footer {\n  text-align: center;\n  margin-top: 1.5rem;\n  color: #4a5568;\n  font-size: 0.95rem;\n  position: relative;\n  z-index: 1;\n}\n.auth-footer a {\n  color: #0066cc;\n  font-weight: 600;\n  text-decoration: none;\n}\n.auth-footer a:hover {\n  color: #0096ff;\n  text-decoration: underline;\n}\n@media (max-width: 600px) {\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n  .auth-card {\n    padding: 2rem 1.5rem;\n  }\n}\n/*# sourceMappingURL=register.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Register, { className: "Register", filePath: "src/app/components/register/register.ts", lineNumber: 12 });
})();
export {
  Register
};
//# sourceMappingURL=chunk-5PZR2S6L.js.map
