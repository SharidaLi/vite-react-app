const bc = new BroadcastChannel('login');
console.log("🚀 ~ file: BroadcastChannel.ts ~ line 2 ~ bc", bc)
console.log("🚀 ~ file: BroadcastChannel.ts ~ line 2 ~ bc typeof", typeof bc)

bc.onmessage = (event) => {
  const { data } = event;
  if (data === 'true') {
    window.alert('你在其它页面登录了');
  } else if (data === 'false') {
    window.alert('你在其它页面退出登录了');
  }
};

export default bc;
