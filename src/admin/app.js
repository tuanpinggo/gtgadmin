export default {
  config: {
      locales: ["vi","en"],
      translations: {
          vi: {
            "global.content-manager": "Quản trị nội dung",
            "Auth.form.welcome.subtitle": "Đăng nhập vào tài khoản quản trị viên của bạn",
            "app.components.LeftMenu.navbrand.title": "The Pyo Admin system",
            "app.components.LeftMenu.navbrand.workplace": "Workplace",
            "Content Manager": "Quản lý nội dung",
            "Media Library": "Quản lý hình ảnh",
            "app.components.LeftMenu.general": "Cấu hình",
            "app.components.LeftMenu.plugins": "Mở rộng",
            "Settings.profile.form.section.experience.interfaceLanguageHelp": "Các thay đổi này sẽ chỉ áp dụng với tài khoản của bạn.",
          },
          en: {
            "Auth.form.welcome.title": "The Pyo Admin System",
            "Auth.form.welcome.subtitle": "Log in to your admin account",
            "app.components.LeftMenu.navbrand.title": "The Pyo Admin system",
            "app.components.LeftMenu.navbrand.workplace": "Workplace",
            "Content Manager": "Content Manager",
            "Media Library": "Media Library",
            "app.components.LeftMenu.general": "General",
            "Settings.profile.form.section.experience.interfaceLanguageHelp": "Preference changes will apply only to you.",
          }
      },
      tutorials: false,
      notifications: { releases: false }
  },
  bootstrap() { },
};
