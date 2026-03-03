import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification.service';

// ====================
// مكون عرض الإشعارات
// ====================
// يعرض قائمة الإشعارات في أعلى يمين الشاشة
// يستخدم Signals للتحديث التلقائي بدون subscribe
// ====================

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css'
})
export class NotificationsComponent {
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
  closeNotification(id: string): void {
    this.notificationService.remove(id);
  }

  // ====================
  // الحصول على الأيقونة حسب نوع الإشعار
  // ====================
  getIcon(type: string): string {
    const icons: Record<string, string> = {
      success: '✓',
      error: '✗',
      info: 'ℹ',
      warning: '⚠'
    };
    return icons[type] || 'ℹ';
  }
}
