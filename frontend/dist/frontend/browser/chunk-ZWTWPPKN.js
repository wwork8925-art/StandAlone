import {
  Injectable,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-267HQEHF.js";

// src/app/services/notification.service.ts
var NotificationService = class _NotificationService {
  // ====================
  // Signal يحمل قائمة الإشعارات النشطة
  // ====================
  // أي مكون يقرأ هذا Signal سيتم تحديثه تلقائياً عند تغيير القائمة
  notificationsSignal = signal([], ...ngDevMode ? [{ debugName: "notificationsSignal" }] : []);
  // ====================
  // Signal للقراءة فقط - نعرضه للمكونات
  // ====================
  // باستخدام asReadonly() نمنع المكونات من التعديل المباشر
  notifications = this.notificationsSignal.asReadonly();
  // ====================
  // دالة عامة لإضافة إشعار
  // ====================
  show(message, type, duration = 5e3) {
    const notification = {
      id: this.generateId(),
      message,
      type,
      duration
    };
    this.notificationsSignal.update((current) => [...current, notification]);
    if (duration > 0) {
      setTimeout(() => this.remove(notification.id), duration);
    }
  }
  // ====================
  // دوال مختصرة لأنواع الإشعارات المختلفة
  // ====================
  success(message, duration) {
    this.show(message, "success", duration);
  }
  error(message, duration) {
    this.show(message, "error", duration);
  }
  info(message, duration) {
    this.show(message, "info", duration);
  }
  warning(message, duration) {
    this.show(message, "warning", duration);
  }
  // ====================
  // حذف إشعار محدد
  // ====================
  remove(id) {
    this.notificationsSignal.update((current) => current.filter((notification) => notification.id !== id));
  }
  // ====================
  // مسح كل الإشعارات
  // ====================
  clear() {
    this.notificationsSignal.set([]);
  }
  // ====================
  // توليد ID فريد للإشعار
  // ====================
  generateId() {
    return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
  }
  static \u0275fac = function NotificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  NotificationService
};
//# sourceMappingURL=chunk-ZWTWPPKN.js.map
