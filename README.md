# 🌴 Vacation Manager

A modern web application built with Angular 19 for managing employee vacations and time-off requests. This application provides role-based access control with specific features for employees, managers, and administrators.

## 💻 Technologies

- Angular 19.2.0
- Tailwind CSS 4.0
- Lucide Icons
- RxJS 7.8
- TypeScript 5.7

## 🛠️ Prerequisites

- Node.js (LTS version recommended)
- pnpm package manager
- Angular CLI 19.2.1

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/artumont/VacationManager
cd VacationManager
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm start
```

The application will be available at `http://localhost:4200`

## 🗺️ Route Structure

### Public Routes
- `/` - Home page

### Employee Routes
- `/employee/request-vacations` - Submit vacation requests
- `/employee/vacation-dashboard` - Personal vacation overview

### Manager Routes
- `/manager/approve-vacations` - Review and approve team requests
- `/manager/manage-vacations` - Team vacation management

### Admin Routes
- `/admin/configure-holidays` - Holiday calendar configuration
- `/admin/manage-permissions` - User role and permission management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
