// ====================
// نموذج الإشعارات - Notification Model
// ====================

export type NotificationType = 'success' | 'error' | 'info' | 'warning';

export interface Notification {
  id: string;
  message: string;
  type: NotificationType;
  duration?: number ; // مدة العرض بالميلي ثانية (اختياري)
}
