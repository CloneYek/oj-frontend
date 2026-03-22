import ACCESS_ENUM from "@/access/accessEnum";

/**
 * 定义全局权限
 * @param loginUser
 * @param needAccess
 * @return 返回有无权限
 */
const checkAccess = (loginUser: any, needAccess = ACCESS_ENUM.NOT_LOGIN) => {
  //获取当前用户具有的权限，若没有loginUser，则表示未登录
  const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN;
  if (needAccess === ACCESS_ENUM.NOT_LOGIN) {
    return true;
  }
  //如果用户登录才能访问
  if (needAccess === ACCESS_ENUM.USER) {
    //如果用户没有登录
    if (loginUserAccess === ACCESS_ENUM.NOT_LOGIN) {
      return false;
    }
  }
  //如果管理员登录才能访问
  if (needAccess === ACCESS_ENUM.ADMIN) {
    //如果不是管理员
    if (loginUserAccess !== ACCESS_ENUM.ADMIN) {
      return false;
    }
  }
  return true;
};

export default checkAccess;
