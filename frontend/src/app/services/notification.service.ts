import { Injectable, signal } from '@angular/core';
import { Notification, NotificationType } from '../models/notification.model';

// ====================
// خدمة الإشعارات باستخدام Signals
// ====================
// هذه الخدمة تدير الإشعارات في التطبيق باستخدام Angular Signals
// الميزة: التحديث التلقائي للواجهة بدون الحاجة لـ ChangeDetectorRef
// ====================

@Injectable({ providedIn: 'root' })
export class NotificationService {
  // ====================
  // Signal يحمل قائمة الإشعارات النشطة
  // ====================
  // أي مكون يقرأ هذا Signal سيتم تحديثه تلقائياً عند تغيير القائمة
  private notificationsSignal = signal<Notification[]>([]);

  // ====================
  // Signal للقراءة فقط - نعرضه للمكونات
  // ====================
  // باستخدام asReadonly() نمنع المكونات من التعديل المباشر
  public notifications = this.notificationsSignal.asReadonly();

  // ====================
  // دالة عامة لإضافة إشعار
  // ====================
  private show(message: string, type: NotificationType, duration: number = 5000): void {
    // إنشاء إشعار جديد بـ ID فريد
    const notification: Notification = {
      id: this.generateId(),
      message,
      type,
      duration
    };

    // إضافة الإشعار للقائمة باستخدام update()
    // update() تأخذ دالة تستقبل القيمة الحالية وترجع القيمة الجديدة
    this.notificationsSignal.update(current => [...current, notification]);

    // حذف الإشعار تلقائياً بعد المدة المحددة
    if (duration > 0) {
      setTimeout(() => this.remove(notification.id), duration);
    }
  }

  // ====================
  // دوال مختصرة لأنواع الإشعارات المختلفة
  // ====================

  success(message: string, duration?: number): void {
    this.show(message, 'success', duration);
  }

  error(message: string, duration?: number): void {
    this.show(message, 'error', duration);
  }

  info(message: string, duration?: number): void {
    this.show(message, 'info', duration);
  }

  warning(message: string, duration?: number): void {
    this.show(message, 'warning', duration);
  }

  // ====================
  // حذف إشعار محدد
  // ====================
  remove(id: string): void {
    this.notificationsSignal.update(current => 
      current.filter(notification => notification.id !== id)
    );
  }

  // ====================
  // مسح كل الإشعارات
  // ====================
  clear(): void {
    this.notificationsSignal.set([]);
  }

  // ====================
  // توليد ID فريد للإشعار
  // ====================
  private generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
  }
}
