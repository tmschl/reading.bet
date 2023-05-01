export function Profile (props) {
  console.log(props);
  return (
    <div>hello {props.userInfo.username}</div>
  )
};

