import {
  HttpClient,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-267HQEHF.js";

// src/app/services/request.service.ts
var RequestService = class _RequestService {
  http;
  // رابط الـ API الخاص بطلبات السكن في الباك إند
  API = "http://localhost:5003/api/requests";
  constructor(http) {
    this.http = http;
  }
  // -----------------------------------------------------------------
  // GET /api/requests
  // يجلب جميع الطلبات — متاح للأدمن فقط
  // -----------------------------------------------------------------
  getAll() {
    return this.http.get(this.API);
  }
  // -----------------------------------------------------------------
  // POST /api/requests
  // يُنشئ طلب سكن جديد للمستخدم الحالي
  // hostelName → اسم السكن الذي يريده المستخدم
  // -----------------------------------------------------------------
  create(hostelName) {
    return this.http.post(this.API, { hostelName });
  }
  // -----------------------------------------------------------------
  // GET /api/UserReqYN/my-latest
  // يجلب آخر طلب للمستخدم الحالي — للمستخدم العادي فقط
  // -----------------------------------------------------------------
  getMyLatest() {
    return this.http.get("http://localhost:5003/api/UserReqYN/my-latest");
  }
  // -----------------------------------------------------------------
  // PUT /api/requests/{id}
  // يُحدّث حالة الطلب — للأدمن فقط
  // status → القيم المسموحة: 'Approved' أو 'Rejected'
  // -----------------------------------------------------------------
  updateStatus(id, status) {
    return this.http.put(`${this.API}/${id}`, { status });
  }
  getUserCount() {
    return this.http.get("http://localhost:5003/api/genralrequest/count");
  }
  static \u0275fac = function RequestService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RequestService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RequestService, factory: _RequestService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequestService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  RequestService
};
//# sourceMappingURL=chunk-Z4QYJ74F.js.map
