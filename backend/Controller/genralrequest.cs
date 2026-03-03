using backend.Data;                  // استدعاء DbContext للتعامل مع قاعدة البيانات
using backend.Models;                // استدعاء موديلات المشروع (مثل AppUser)
using Microsoft.AspNetCore.Authorization;  // للتحكم بصلاحيات الوصول
using Microsoft.AspNetCore.Identity;       // لإدارة المستخدمين والأدوار
using Microsoft.AspNetCore.Mvc;            // لإنشاء Controllers و Actions
using Microsoft.EntityFrameworkCore;       // لدوال EF مثل CountAsync

namespace genralrequest.Controller
{
    // تحديد مسار الكنترولر في الـ API
    // [controller] يُستبدل باسم الكنترولر نفسه (genralrequest)
    [Route("api/[controller]")]
    // تحديد أن هذا كنترولر API (يعطيك JSON تلقائي ويقوم ببعض التحقق)
    [ApiController]
    public class genralrequest : ControllerBase
    {
        // المتغيرات الخاصة بالكنترولر
        private readonly AppDbContext _db;               // قاعدة البيانات
        private readonly IWebHostEnvironment _env;      // للوصول لمسارات الملفات على السيرفر
        private readonly UserManager<AppUser> _userManager; // لإدارة المستخدمين

        // الكونستركتر: يتم حقن الخدمات (Dependency Injection)
        public genralrequest(
            AppDbContext db,                        // حقن قاعدة البيانات
            IWebHostEnvironment env,                // حقن البيئة للوصول لمسارات الملفات
            UserManager<AppUser> userManager)       // حقن UserManager للتعامل مع المستخدمين
        {
            _db = db;                                // تخزين DbContext للاستخدام لاحقاً
            _env = env;                              // تخزين البيئة للاستخدام لاحقاً
            _userManager = userManager;              // تخزين UserManager للاستخدام لاحقاً
        }

        // -------------------------
        // دالة API لحساب عدد المستخدمين
        // -------------------------
        [HttpGet("count")]    // هذا المسار: GET /api/genralrequest/count
        [AllowAnonymous]      // يسمح لأي شخص بدون تسجيل الدخول بالوصول
        public async Task<IActionResult> GetUserCount()
        {
            // الحصول على عدد المستخدمين في قاعدة البيانات
            // _userManager.Users يمثل جدول AspNetUsers
            // CountAsync() عملية غير متزامنة لتحسين أداء السيرفر
            var count = await _userManager.Users.CountAsync();

            // إرجاع العدد بصيغة JSON مع كود 200 OK
            return Ok(count);
        }
    }
}