// 校园活动管理系统 - 模拟数据
const DEFAULT_ACTIVITIES = [
  {
    id: 1,
    title: '2025年春季校园招聘会',
    description: '汇聚百家企业，为毕业生提供丰富就业机会。现场设有一对一简历指导、模拟面试等环节，助你职场起航！活动当天请携带纸质简历至少5份，着正装出席。',
    location: '图书馆一楼报告厅',
    startTime: '2025-05-15 09:00',
    endTime: '2025-05-15 17:00',
    image: 'https://picsum.photos/seed/act1/600/400',
    maxParticipants: 200,
    contact: '就业指导中心 010-88881234',
    status: 'upcoming',
    createdAt: '2025-04-20 10:00'
  },
  {
    id: 2,
    title: '第十届程序设计竞赛',
    description: ' ACM 模式的校级程序设计竞赛，三人组队参赛。赛题涵盖算法、数据结构、动态规划等核心知识点，优秀队伍将代表学校参加省赛！',
    location: '计算机学院 A栋机房',
    startTime: '2025-05-20 08:30',
    endTime: '2025-05-20 13:30',
    image: 'https://picsum.photos/seed/act2/600/400',
    maxParticipants: 90,
    contact: '计算机学院学生会 010-88885678',
    status: 'upcoming',
    createdAt: '2025-04-25 14:00'
  },
  {
    id: 3,
    title: '校园音乐节 · 夏日回响',
    description: '一年一度的校园音乐盛典！摇滚、民谣、电音多舞台同时开演，还有露天美食区和创意集市。让音乐点燃这个夏天！',
    location: '学校田径场',
    startTime: '2025-06-01 18:00',
    endTime: '2025-06-01 22:00',
    image: 'https://picsum.photos/seed/act3/600/400',
    maxParticipants: 500,
    contact: '校团委 010-88889012',
    status: 'upcoming',
    createdAt: '2025-05-01 09:00'
  },
  {
    id: 4,
    title: 'Python 数据分析入门工作坊',
    description: '从零开始学习 Python 数据分析！课程内容涵盖 Pandas、NumPy、Matplotlib 等核心库，配合真实数据集实战练习。自带笔记本电脑参加。',
    location: '信息楼 302 教室',
    startTime: '2025-05-10 14:00',
    endTime: '2025-05-10 17:00',
    image: 'https://picsum.photos/seed/act4/600/400',
    maxParticipants: 40,
    contact: '数据分析社团 010-88883456',
    status: 'full',
    createdAt: '2025-04-18 16:00'
  },
  {
    id: 5,
    title: '心理健康周 · 正念冥想体验',
    description: '在繁忙的学业中找到内心的平静。专业心理咨询师带领你体验正念冥想，学习压力管理技巧，提升专注力与幸福感。',
    location: '学生活动中心 B201',
    startTime: '2025-05-12 15:00',
    endTime: '2025-05-12 16:30',
    image: 'https://picsum.photos/seed/act5/600/400',
    maxParticipants: 30,
    contact: '心理健康中心 010-88887890',
    status: 'full',
    createdAt: '2025-04-22 11:00'
  },
  {
    id: 6,
    title: '摄影采风 · 春日校园',
    description: '用镜头记录校园最美春色！专业摄影师带队，从构图到后期全流程指导。优秀作品将在校庆展览中展出。自备相机或手机均可。',
    location: '校园各景观节点',
    startTime: '2025-04-30 09:00',
    endTime: '2025-04-30 12:00',
    image: 'https://picsum.photos/seed/act6/600/400',
    maxParticipants: 25,
    contact: '摄影协会 010-88882345',
    status: 'ended',
    createdAt: '2025-04-15 08:00'
  },
  {
    id: 7,
    title: '创新创业大赛校选赛',
    description: '展示你的创业点子！评审团由行业专家和投资人组成，优胜项目可获得孵化资源支持和推荐参加省级比赛。团队或个人均可报名。',
    location: '创新创业学院路演厅',
    startTime: '2025-05-25 09:00',
    endTime: '2025-05-25 17:00',
    image: 'https://picsum.photos/seed/act7/600/400',
    maxParticipants: 60,
    contact: '创新创业学院 010-88884567',
    status: 'upcoming',
    createdAt: '2025-05-02 10:00'
  },
  {
    id: 8,
    title: '英语角 · Cultural Exchange Night',
    description: '与留学生一起度过一个充满异域风情的夜晚！全英文交流环境，美食分享，文化游戏，拓展你的国际视野。All levels welcome!',
    location: '外语楼一楼咖啡厅',
    startTime: '2025-05-08 19:00',
    endTime: '2025-05-08 21:00',
    image: 'https://picsum.photos/seed/act8/600/400',
    maxParticipants: 50,
    contact: '外语学院 010-88886789',
    status: 'upcoming',
    createdAt: '2025-04-28 13:00'
  },
  {
    id: 9,
    title: '篮球联赛 · 院际杯半决赛',
    description: '四强对决，谁能挺进决赛？来现场为你的学院呐喊助威！中场休息设有三分球挑战赛，观众参与赢取精美奖品。',
    location: '学校体育馆',
    startTime: '2025-04-28 15:00',
    endTime: '2025-04-28 18:00',
    image: 'https://picsum.photos/seed/act9/600/400',
    maxParticipants: 300,
    contact: '体育部 010-88880123',
    status: 'ended',
    createdAt: '2025-04-10 09:00'
  },
  {
    id: 10,
    title: '开源社区 Meetup',
    description: '校园开源爱好者的聚会！分享开源项目经验，学习 Git 协作流程，了解如何参与开源社区。特别邀请到几位资深开源贡献者做 Lightning Talk。',
    location: '图书馆三楼创客空间',
    startTime: '2025-05-18 14:00',
    endTime: '2025-05-18 17:00',
    image: 'https://picsum.photos/seed/act10/600/400',
    maxParticipants: 60,
    contact: '开源社区 010-88885678',
    status: 'upcoming',
    createdAt: '2025-05-05 08:00'
  }
];

const DEFAULT_USERS = [
  {
    id: 1,
    username: 'admin',
    password: 'admin123',
    nickname: '系统管理员',
    phone: '13800000001',
    role: 1,
    avatar: 'https://picsum.photos/seed/user1/200/200',
    createdAt: '2025-01-01 00:00'
  },
  {
    id: 2,
    username: 'zhangsan',
    password: '123456',
    nickname: '张三',
    phone: '13800000002',
    role: 0,
    avatar: 'https://picsum.photos/seed/user2/200/200',
    createdAt: '2025-02-15 10:30'
  },
  {
    id: 3,
    username: 'lisi',
    password: '123456',
    nickname: '李四',
    phone: '13800000003',
    role: 0,
    avatar: 'https://picsum.photos/seed/user3/200/200',
    createdAt: '2025-03-01 14:20'
  },
  {
    id: 4,
    username: 'wangwu',
    password: '123456',
    nickname: '王五',
    phone: '13800000004',
    role: 0,
    avatar: 'https://picsum.photos/seed/user4/200/200',
    createdAt: '2025-03-10 09:15'
  },
  {
    id: 5,
    username: 'zhaoliu',
    password: '123456',
    nickname: '赵六',
    phone: '13800000005',
    role: 0,
    avatar: 'https://picsum.photos/seed/user5/200/200',
    createdAt: '2025-04-05 16:45'
  }
];

const DEFAULT_REGISTRATIONS = [
  { id: 1, userId: 2, activityId: 1, registeredAt: '2025-04-21 08:00' },
  { id: 2, userId: 3, activityId: 1, registeredAt: '2025-04-21 09:30' },
  { id: 3, userId: 4, activityId: 1, registeredAt: '2025-04-22 10:00' },
  { id: 4, userId: 2, activityId: 2, registeredAt: '2025-04-26 08:00' },
  { id: 5, userId: 5, activityId: 2, registeredAt: '2025-04-26 10:00' },
  { id: 6, userId: 3, activityId: 3, registeredAt: '2025-05-02 10:00' },
  { id: 7, userId: 4, activityId: 3, registeredAt: '2025-05-02 11:00' },
  { id: 8, userId: 2, activityId: 4, registeredAt: '2025-04-19 07:00' },
  { id: 9, userId: 3, activityId: 4, registeredAt: '2025-04-19 08:00' },
  { id: 10, userId: 5, activityId: 4, registeredAt: '2025-04-19 09:00' },
  { id: 11, userId: 2, activityId: 5, registeredAt: '2025-04-23 09:00' },
  { id: 12, userId: 4, activityId: 5, registeredAt: '2025-04-23 10:00' },
  { id: 13, userId: 5, activityId: 5, registeredAt: '2025-04-23 11:00' },
  { id: 14, userId: 2, activityId: 6, registeredAt: '2025-04-16 10:00' },
  { id: 15, userId: 3, activityId: 6, registeredAt: '2025-04-16 11:00' },
  { id: 16, userId: 4, activityId: 7, registeredAt: '2025-05-03 08:00' },
  { id: 17, userId: 5, activityId: 7, registeredAt: '2025-05-03 09:00' },
  { id: 18, userId: 2, activityId: 8, registeredAt: '2025-04-29 10:00' },
  { id: 19, userId: 3, activityId: 8, registeredAt: '2025-04-29 11:00' },
  { id: 20, userId: 4, activityId: 9, registeredAt: '2025-04-12 08:00' },
  { id: 21, userId: 5, activityId: 9, registeredAt: '2025-04-12 09:00' },
  { id: 22, userId: 2, activityId: 10, registeredAt: '2025-05-06 10:00' },
  { id: 23, userId: 3, activityId: 10, registeredAt: '2025-05-06 11:00' },
  { id: 24, userId: 4, activityId: 10, registeredAt: '2025-05-06 12:00' }
];

// Make activity 4 (Python workshop) full: 40 participants
for (let i = 25; i <= 64; i++) {
  DEFAULT_REGISTRATIONS.push({
    id: i,
    userId: ((i - 25) % 4) + 2,
    activityId: 4,
    registeredAt: '2025-04-19 09:' + (i % 60).toString().padStart(2, '0')
  });
}

// Make activity 5 (正念冥想) full: 30 participants
for (let i = 65; i <= 94; i++) {
  DEFAULT_REGISTRATIONS.push({
    id: i,
    userId: ((i - 65) % 4) + 2,
    activityId: 5,
    registeredAt: '2025-04-23 12:' + (i % 60).toString().padStart(2, '0')
  });
}

// Data access helpers
function getActivities() {
  const data = localStorage.getItem('activities');
  return data ? JSON.parse(data) : DEFAULT_ACTIVITIES;
}

function setActivities(activities) {
  localStorage.setItem('activities', JSON.stringify(activities));
}

function getUsers() {
  const data = localStorage.getItem('users');
  return data ? JSON.parse(data) : DEFAULT_USERS;
}

function setUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

function getRegistrations() {
  const data = localStorage.getItem('registrations');
  return data ? JSON.parse(data) : DEFAULT_REGISTRATIONS;
}

function setRegistrations(registrations) {
  localStorage.setItem('registrations', JSON.stringify(registrations));
}

function getCurrentUser() {
  const data = localStorage.getItem('currentUser');
  return data ? JSON.parse(data) : null;
}

function setCurrentUser(user) {
  localStorage.setItem('currentUser', JSON.stringify(user));
}

function clearCurrentUser() {
  localStorage.removeItem('currentUser');
}

function getActivityById(id) {
  const activities = getActivities();
  return activities.find(a => a.id === parseInt(id));
}

function getRegistrationsByActivity(activityId) {
  return getRegistrations().filter(r => r.activityId === parseInt(activityId));
}

function getRegistrationsByUser(userId) {
  return getRegistrations().filter(r => r.userId === parseInt(userId));
}

function isRegistered(userId, activityId) {
  return getRegistrations().some(
    r => r.userId === parseInt(userId) && r.activityId === parseInt(activityId)
  );
}

function getParticipantCount(activityId) {
  return getRegistrationsByActivity(activityId).length;
}

function registerForActivity(userId, activityId) {
  const regs = getRegistrations();
  const activity = getActivityById(activityId);
  if (!activity) return false;
  const count = getParticipantCount(activityId);
  if (count >= activity.maxParticipants) return false;
  if (isRegistered(userId, activityId)) return false;

  const newReg = {
    id: regs.length > 0 ? Math.max(...regs.map(r => r.id)) + 1 : 1,
    userId: parseInt(userId),
    activityId: parseInt(activityId),
    registeredAt: new Date().toISOString().slice(0, 16).replace('T', ' ')
  };
  regs.push(newReg);
  setRegistrations(regs);
  return true;
}

function cancelRegistration(userId, activityId) {
  let regs = getRegistrations();
  const before = regs.length;
  regs = regs.filter(
    r => !(r.userId === parseInt(userId) && r.activityId === parseInt(activityId))
  );
  setRegistrations(regs);
  return regs.length < before;
}

function deleteActivity(activityId) {
  let activities = getActivities();
  activities = activities.filter(a => a.id !== parseInt(activityId));
  setActivities(activities);
  // Also delete registrations
  let regs = getRegistrations();
  regs = regs.filter(r => r.activityId !== parseInt(activityId));
  setRegistrations(regs);
}

function saveActivity(activityData) {
  const activities = getActivities();
  if (activityData.id) {
    const index = activities.findIndex(a => a.id === parseInt(activityData.id));
    if (index !== -1) {
      activities[index] = { ...activities[index], ...activityData };
      setActivities(activities);
      return activities[index];
    }
  } else {
    const newId = activities.length > 0 ? Math.max(...activities.map(a => a.id)) + 1 : 1;
    const newActivity = {
      ...activityData,
      id: newId,
      status: 'upcoming',
      createdAt: new Date().toISOString().slice(0, 16).replace('T', ' ')
    };
    activities.push(newActivity);
    setActivities(activities);
    return newActivity;
  }
}

function registerUser(userData) {
  const users = getUsers();
  if (users.some(u => u.username === userData.username)) return false;
  const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
  const newUser = {
    id: newId,
    username: userData.username,
    password: userData.password,
    nickname: userData.nickname || userData.username,
    phone: userData.phone || '',
    role: 0,
    avatar: `https://picsum.photos/seed/user${newId}/200/200`,
    createdAt: new Date().toISOString().slice(0, 16).replace('T', ' ')
  };
  users.push(newUser);
  setUsers(users);
  return newUser;
}

function removeRegistration(regId) {
  let regs = getRegistrations();
  regs = regs.filter(r => r.id !== parseInt(regId));
  setRegistrations(regs);
}

function removeRegistrationsByActivity(userId, activityId) {
  let regs = getRegistrations();
  regs = regs.filter(r => !(r.userId === parseInt(userId) && r.activityId === parseInt(activityId)));
  setRegistrations(regs);
}

// Reset all data
function resetData() {
  localStorage.removeItem('activities');
  localStorage.removeItem('users');
  localStorage.removeItem('registrations');
}

// Initialize data if not exists
function initData() {
  if (!localStorage.getItem('activities')) {
    setActivities(DEFAULT_ACTIVITIES);
  }
  if (!localStorage.getItem('users')) {
    setUsers(DEFAULT_USERS);
  }
  if (!localStorage.getItem('registrations')) {
    setRegistrations(DEFAULT_REGISTRATIONS);
  }
}
