# 📢 دليل استخدام نظام الإشعارات (Notifications with Signals)

## ما هو؟
نظام إشعارات بسيط يستخدم **Angular Signals** لعرض رسائل للمستخدم بشكل تلقائي.

---

## ✨ المميزات

- ✅ **تحديث تلقائي للواجهة** - بدون الحاجة لـ ChangeDetectorRef
- ✅ **4 أنواع من الإشعارات**: Success, Error, Info, Warning
- ✅ **اختفاء تلقائي** - يختفي بعد 5 ثوان (قابل للتخصيص)
- ✅ **إغلاق يدوي** - يمكن إغلاق الإشعار بالضغط على ×
- ✅ **سهل الاستخدام** - سطر واحد فقط!

---

## 📦 الملفات المنشأة

```
models/
  └─ notification.model.ts         # نموذج الإشعار وأنواعه

services/
  └─ notification.service.ts       # الخدمة الرئيسية (Signal-based)

components/
  └─ notifications/
      ├─ notifications.ts          # مكون عرض الإشعارات
      ├─ notifications.html        # قالب HTML
      └─ notifications.css         # التنسيقات
```

---

## 🚀 كيفية الاستخدام

### 1️⃣ حقن الخدمة في أي مكون

```typescript
import { inject } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

export class MyComponent {
  private notificationService = inject(NotificationService);
}
```

### 2️⃣ عرض إشعار

```typescript
// إشعار نجاح (أخضر)
this.notificationService.success('تم حفظ البيانات بنجاح!');

// إشعار خطأ (أحمر)
this.notificationService.error('فشل في تحميل البيانات');

// إشعار معلومات (أزرق)
this.notificationService.info('لديك 3 رسائل جديدة');

// إشعار تحذير (أصفر)
this.notificationService.warning('يرجى تحديث كلمة المرور');
```

### 3️⃣ تخصيص مدة العرض (اختياري)

```typescript
// يختفي بعد 10 ثوان
this.notificationService.success('تم الحفظ', 10000);

// لا يختفي تلقائياً (يجب الإغلاق يدوياً)
this.notificationService.error('خطأ حرج', 0);
```

---

## 📝 أمثلة عملية

### مثال 1: عند إرسال طلب سكن

```typescript
requestRoom(): void {
  this.requestService.create(hostelName).subscribe({
    next: () => {
      this.notificationService.success('تم إرسال طلبك بنجاح! ✓');
    },
    error: (err) => {
      this.notificationService.error('حدث خطأ أثناء إرسال الطلب');
    }
  });
}
```

### مثال 2: عند قبول/رفض طلب (Admin)

```typescript
approveRequest(req: HostelRequest): void {
  this.requestService.updateStatus(req.id, 'Approved').subscribe({
    next: () => {
      this.notificationService.success(`تم قبول طلب ${req.username}`);
    }
  });
}
```

### مثال 3: عند تحديث الحساب

```typescript
updateProfile(): void {
  this.userService.update(this.profileData).subscribe({
    next: () => {
      this.notificationService.info('تم تحديث معلومات الحساب');
    }
  });
}
```

---

## 🎨 تخصيص التصميم

الملف: `components/notifications/notifications.css`

```css
/* تغيير موضع الإشعارات */
.notifications-container {
  top: 100px;    /* المسافة من الأعلى */
  right: 20px;   /* المسافة من اليمين */
}

/* تغيير ألوان إشعار النجاح */
.notification-success {
  border-color: #28a745;  /* لون الإطار */
  background: #d4edda;    /* لون الخلفية */
  color: #155724;         /* لون النص */
}
```

---

## 🧠 لماذا Signals؟

### الطريقة القديمة (Observables):
```typescript
userCount: number = 0;

ngOnInit() {
  this.service.getCount().subscribe(count => {
    this.userCount = count;
    this.cdr.detectChanges(); // ❌ نحتاج لهذا يدوياً
  });
}
```

### الطريقة الجديدة (Signals):
```typescript
userCount = signal(0);

ngOnInit() {
  this.service.getCount().subscribe(count => {
    this.userCount.set(count); // ✅ تحديث تلقائي!
  });
}

// في الـ Template:
// {{ userCount() }}
```

**الفرق:**
- ❌ Observables: تحتاج subscribe + ChangeDetectorRef
- ✅ Signals: تحديث تلقائي + أسرع + أسهل

---

## 🔧 دوال الخدمة

| الدالة | الوصف | المعاملات |
|-------|-------|----------|
| `success(msg, duration?)` | إشعار نجاح | رسالة + مدة اختيارية |
| `error(msg, duration?)` | إشعار خطأ | رسالة + مدة اختيارية |
| `info(msg, duration?)` | إشعار معلومات | رسالة + مدة اختيارية |
| `warning(msg, duration?)` | إشعار تحذير | رسالة + مدة اختيارية |
| `remove(id)` | حذف إشعار | معرّف الإشعار |
| `clear()` | مسح كل الإشعارات | - |

---

## 📚 للتعلم أكثر

### عن Signals:
- [Angular Signals Documentation](https://angular.dev/guide/signals)
- Signals هي المستقبل في Angular (17+)
- أسهل وأسرع من RxJS للحالات البسيطة

### متى تستخدم Signals:
✅ عدادات، حالات بسيطة، بيانات محلية  
❌ HTTP requests معقدة، تحتاج RxJS operators

---

## 🎯 التطبيقات الحالية

تم إضافة الإشعارات في:

1. ✅ **طلبات السكن** (hostel-detail.ts)
   - عند إرسال طلب جديد
   - عند إضافة تعليق

2. ✅ **لوحة الأدمن** (admin.ts)
   - عند قبول/رفض طلب
   - عند تغيير صلاحيات مستخدم
   - عند حذف مستخدم

---

## 💡 نصيحة

استخدم الإشعارات في أي عملية:
- ✅ تتطلب انتظار (API call)
- ✅ قد تنجح أو تفشل
- ✅ المستخدم يحتاج تأكيد

**مثال سيء:** إشعار عند كل ضغطة زر  
**مثال جيد:** إشعار عند نجاح/فشل عملية حفظ

---

**🎉 بالتوفيق!**
