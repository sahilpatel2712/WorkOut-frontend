/* eslint-disable react/react-in-jsx-scope */
import {Path, Polygon, Rect, Svg} from 'react-native-svg';

export const UserIcon = () => (
  <Svg viewBox="0 0 24 24" fill="none" width="24" height="24">
    <Path
      d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const LockIcon = () => (
  <Svg viewBox="0 0 24 24" fill="none" width="24" height="24">
    <Path
      d="M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const CalendarIcon = () => (
  <Svg viewBox="-2.4 -2.4 28.80 28.80" fill="none" width="24" height="24">
    <Path
      d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Svg>
);

export const LogOutIcon = () => (
  <Svg viewBox="0 -0.5 25 25" fill="none" width={25} height={25}>
    <Path
      d="M11.75 9.874C11.75 10.2882 12.0858 10.624 12.5 10.624C12.9142 10.624 13.25 10.2882 13.25 9.874H11.75ZM13.25 4C13.25 3.58579 12.9142 3.25 12.5 3.25C12.0858 3.25 11.75 3.58579 11.75 4H13.25ZM9.81082 6.66156C10.1878 6.48991 10.3542 6.04515 10.1826 5.66818C10.0109 5.29121 9.56615 5.12478 9.18918 5.29644L9.81082 6.66156ZM5.5 12.16L4.7499 12.1561L4.75005 12.1687L5.5 12.16ZM12.5 19L12.5086 18.25C12.5029 18.25 12.4971 18.25 12.4914 18.25L12.5 19ZM19.5 12.16L20.2501 12.1687L20.25 12.1561L19.5 12.16ZM15.8108 5.29644C15.4338 5.12478 14.9891 5.29121 14.8174 5.66818C14.6458 6.04515 14.8122 6.48991 15.1892 6.66156L15.8108 5.29644ZM13.25 9.874V4H11.75V9.874H13.25ZM9.18918 5.29644C6.49843 6.52171 4.7655 9.19951 4.75001 12.1561L6.24999 12.1639C6.26242 9.79237 7.65246 7.6444 9.81082 6.66156L9.18918 5.29644ZM4.75005 12.1687C4.79935 16.4046 8.27278 19.7986 12.5086 19.75L12.4914 18.25C9.08384 18.2892 6.28961 15.5588 6.24995 12.1513L4.75005 12.1687ZM12.4914 19.75C16.7272 19.7986 20.2007 16.4046 20.2499 12.1687L18.7501 12.1513C18.7104 15.5588 15.9162 18.2892 12.5086 18.25L12.4914 19.75ZM20.25 12.1561C20.2345 9.19951 18.5016 6.52171 15.8108 5.29644L15.1892 6.66156C17.3475 7.6444 18.7376 9.79237 18.75 12.1639L20.25 12.1561Z"
      fill="#686D76"
    />
  </Svg>
);

export const DownIcon = () => (
  <Svg viewBox="0 0 24 24" fill="none" width={24} height={24}>
    <Path
      d="M7 10L12 15L17 10"
      stroke="#000000"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const TrashIcon = () => {
  return (
    <Svg viewBox="0 0 24 24" fill="none" width={24} height={24}>
      <Path
        d="M10 12V17"
        stroke="#B31312"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 12V17"
        stroke="#B31312"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 7H20"
        stroke="#B31312"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
        stroke="#B31312"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
        stroke="#B31312"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const PencilIcon = () => {
  return (
    <Svg viewBox="0 0 24 24" fill="none" width={24} height={24}>
      <Path
        d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const ListIcon = () => {
  return (
    <Svg viewBox="0 0 16 16" fill="none" width={24} height={24}>
      <Path d="M3 1H1V3H3V1Z" fill="#333" />
      <Path d="M3 5H1V7H3V5Z" fill="#333" />
      <Path d="M1 9H3V11H1V9Z" fill="#333" />
      <Path d="M3 13H1V15H3V13Z" fill="#333" />
      <Path d="M15 1H5V3H15V1Z" fill="#333" />
      <Path d="M15 5H5V7H15V5Z" fill="#333" />
      <Path d="M5 9H15V11H5V9Z" fill="#333" />
      <Path d="M15 13H5V15H15V13Z" fill="#333" />
    </Svg>
  );
};

export const CalculationIcon = () => {
  return (
    <Svg fill="#333" viewBox="0 0 32 32" width={28} height={28}>
      <Rect x="19" y="13" width="6" height="2" />
      <Rect x="7" y="9" width="6" height="2" />
      <Rect x="19" y="17" width="6" height="2" />

      <Polygon points="13 21 11 21 11 19 9 19 9 21 7 21 7 23 9 23 9 25 11 25 11 23 13 23 13 21" />

      <Path d="M27,3H5A2.0023,2.0023,0,0,0,3,5V27a2.0023,2.0023,0,0,0,2,2H27a2.0023,2.0023,0,0,0,2-2V5A2.0023,2.0023,0,0,0,27,3ZM15,5V15H5V5ZM5,17H15V27H5ZM17,27V5H27V27Z" />
    </Svg>
  );
};

export const graphIcon = () => {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      width={28}
      height={28}>
      <Path
        d="M4 5V19C4 19.5523 4.44772 20 5 20H19"
        stroke="#333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 9L13 13.9999L10.5 11.4998L7 14.9998"
        stroke="#333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
