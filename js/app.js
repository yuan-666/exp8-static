// 校园活动管理系统 - 共享逻辑
document.addEventListener('DOMContentLoaded', function () {
  initData();
  renderNavbar();
  renderFooter();
});

function renderNavbar() {
  const user = getCurrentUser();
  const isAdmin = user && user.role === 1;
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  nav.innerHTML = `
    <nav class="navbar navbar-expand-lg fixed-top glass-nav">
      <div class="container">
        <a class="navbar-brand fw-bold" href="index.html">
          <i class="bi bi-activity text-primary me-2"></i>校园活动
        </a>
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navContent">
          <i class="bi bi-list fs-4"></i>
        </button>
        <div class="collapse navbar-collapse" id="navContent">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" href="index.html"><i class="bi bi-grid me-1"></i>活动广场</a>
            </li>
            ${isAdmin ? `
            <li class="nav-item">
              <a class="nav-link" href="activity-form.html"><i class="bi bi-plus-circle me-1"></i>发布活动</a>
            </li>` : ''}
          </ul>
          <div class="d-flex align-items-center">
            ${user ? `
              <div class="dropdown">
                <a href="#" class="d-flex align-items-center text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" id="userDropdown">
                  <img src="${user.avatar}" alt="avatar" class="rounded-circle me-2" width="32" height="32" style="object-fit:cover">
                  <span class="text-dark fw-medium">${user.nickname}</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-end glass-card border-0 shadow-lg">
                  <li><a class="dropdown-item" href="profile.html"><i class="bi bi-person me-2"></i>个人中心</a></li>
                  ${isAdmin ? '<li><a class="dropdown-item" href="activity-form.html"><i class="bi bi-plus-circle me-2"></i>发布活动</a></li>' : ''}
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item text-danger" href="#" onclick="logout(); return false;"><i class="bi bi-box-arrow-right me-2"></i>退出登录</a></li>
                </ul>
              </div>
            ` : `
              <a href="login.html" class="btn btn-outline-primary btn-sm me-2">登录</a>
              <a href="register.html" class="btn btn-primary btn-sm">注册</a>
            `}
          </div>
        </div>
      </div>
    </nav>
  `;
}

function renderFooter() {
  const footer = document.getElementById('main-footer');
  if (!footer) return;

  footer.innerHTML = `
    <footer class="site-footer mt-5">
      <div class="container">
        <div class="row align-items-center py-4">
          <div class="col-md-4 text-center text-md-start mb-2 mb-md-0">
            <a href="doc-devlog.html" class="text-muted text-decoration-none me-3"><i class="bi bi-journal-code me-1"></i>开发日志</a>
            <a href="doc-tech.html" class="text-muted text-decoration-none"><i class="bi bi-file-earmark-code me-1"></i>技术文档</a>
          </div>
          <div class="col-md-4 text-center mb-2 mb-md-0">
            <span class="text-muted small">&copy; 2025 校园活动管理系统 v2.2.0</span>
          </div>
          <div class="col-md-4 text-center text-md-end">
            <span class="text-muted small">Powered by Bootstrap 5.3</span>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function logout() {
  clearCurrentUser();
  window.location.href = 'login.html';
}

function requireAuth() {
  const user = getCurrentUser();
  if (!user) {
    window.location.href = 'login.html';
    return null;
  }
  return user;
}

function requireAdmin() {
  const user = requireAuth();
  if (!user) return null;
  if (user.role !== 1) {
    window.location.href = 'index.html';
    return null;
  }
  return user;
}

function getStatusBadge(activity) {
  const count = getParticipantCount(activity.id);
  const isFull = count >= activity.maxParticipants;
  if (activity.status === 'ended') {
    return '<span class="badge bg-secondary">已结束</span>';
  }
  if (isFull) {
    return '<span class="badge bg-danger">名额已满</span>';
  }
  return '<span class="badge bg-success">可报名</span>';
}

function getStatusText(status) {
  switch (status) {
    case 'upcoming': return '即将开始';
    case 'full': return '名额已满';
    case 'ended': return '已结束';
    default: return status;
  }
}

function formatDateTime(dt) {
  if (!dt) return '';
  return dt.replace(/-/g, '/').replace(' ', ' ');
}

function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function showToast(message, type) {
  type = type || 'success';
  const container = document.getElementById('toast-container') || createToastContainer();
  const id = 'toast-' + Date.now();
  const iconMap = {
    success: 'bi-check-circle-fill text-success',
    error: 'bi-x-circle-fill text-danger',
    warning: 'bi-exclamation-circle-fill text-warning',
    info: 'bi-info-circle-fill text-info'
  };
  container.innerHTML += `
    <div id="${id}" class="toast glass-card border-0" role="alert" data-bs-delay="3000">
      <div class="toast-body d-flex align-items-center">
        <i class="bi ${iconMap[type] || iconMap.info} me-2 fs-5"></i>
        <span>${message}</span>
        <button type="button" class="btn-close btn-close-sm ms-auto" data-bs-dismiss="toast"></button>
      </div>
    </div>
  `;
  const toastEl = document.getElementById(id);
  const toast = new bootstrap.Toast(toastEl);
  toast.show();
  toastEl.addEventListener('hidden.bs.toast', () => toastEl.remove());
}

function createToastContainer() {
  const container = document.createElement('div');
  container.id = 'toast-container';
  container.className = 'toast-container position-fixed top-0 end-0 p-3';
  container.style.zIndex = '9999';
  document.body.appendChild(container);
  return container;
}

function getUserById(userId) {
  const users = getUsers();
  return users.find(u => u.id === parseInt(userId));
}
