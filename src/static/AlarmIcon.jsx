import React from "react";

AlarmIcon.propTypes = {};

function AlarmIcon(props) {
  return (
    <svg {...props} className={"icon alarm-icon " + props.className}>
      <svg
        viewBox="0 0 60 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.7585 8.6907C20.9266 6.4408 18.1325 5 15 5C9.47715 5 5 9.47715 5 15C5 18.1324 6.44103 20.9268 8.6907 22.7586C7.9187 25.031 7.5 27.4665 7.5 30C7.5 35.5382 9.50093 40.609 12.8193 44.529L8.04918 49.2992C7.31695 50.0315 7.31695 51.2185 8.04918 51.9508C8.7814 52.683 9.9686 52.683 10.7008 51.9508L15.4709 47.1807C19.391 50.499 24.4618 52.5 30 52.5C35.5383 52.5 40.609 50.499 44.529 47.1807L49.2993 51.9508C50.0315 52.683 51.2185 52.683 51.9508 51.9508C52.683 51.2185 52.683 50.0315 51.9508 49.2992L47.1808 44.529C50.499 40.609 52.5 35.5382 52.5 30C52.5 27.4665 52.0813 25.031 51.3093 22.7587C53.5593 20.9268 55.0003 18.1325 55.0003 15C55.0003 9.47715 50.523 5 45.0003 5C41.8678 5 39.0735 6.44085 37.2418 8.69075C34.9693 7.91873 32.5335 7.5 30 7.5C27.4665 7.5 25.031 7.9187 22.7585 8.6907ZM15 8.75C16.5774 8.75 18.0196 9.33403 19.1207 10.3003C15.4159 12.3507 12.3507 15.4159 10.3003 19.1207C9.3339 18.0195 8.75 16.5775 8.75 15C8.75 11.5482 11.5482 8.75 15 8.75ZM40.8795 10.3004C41.9805 9.33403 43.4228 8.75 45.0003 8.75C48.452 8.75 51.2503 11.5482 51.2503 15C51.2503 16.5775 50.6663 18.0197 49.6998 19.1209C47.6495 15.416 44.5843 12.3508 40.8795 10.3004ZM28.125 17.5C29.1605 17.5 30 18.3395 30 19.375V30H36.875C37.9105 30 38.75 30.8395 38.75 31.875C38.75 32.9105 37.9105 33.75 36.875 33.75H28.125C27.0895 33.75 26.25 32.9105 26.25 31.875V19.375C26.25 18.3395 27.0895 17.5 28.125 17.5Z"
        />
      </svg>
    </svg>
  );
}

export default AlarmIcon;