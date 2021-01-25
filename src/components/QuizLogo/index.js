import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';

function Logo({ className }) {
    return (
        <svg width="291" height="102" viewBox="0 0 591 102" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.5937 101.484C14.8413 98.3182 8.90324 90.8114 8.77961 78.9631L8.67873 69.2957C8.61013 62.7205 5.93925 59.4604 0.666095 59.5155L0.550445 48.4321C5.8236 48.377 8.4257 45.0457 8.35675 38.438L8.24976 28.1846C8.28627 22.3245 9.75044 17.5727 12.6423 13.929C15.5666 10.285 19.8848 7.61939 25.5966 5.9321L28.7623 14.4933C24.6773 16.0985 22.5909 20.4988 22.5032 27.6941L22.6138 38.2892C22.6899 45.5805 19.7326 50.7548 13.7421 53.8123C19.7951 56.7441 22.8599 61.8719 22.9363 69.1957L23.0463 79.742C23.2841 86.9339 25.4619 91.2897 29.5795 92.8093L26.5937 101.484ZM261.875 65.4817C264.479 65.4546 266.652 66.2132 268.394 67.7576C270.135 69.2695 271.018 71.2298 271.043 73.6385C271.068 76.0472 270.226 78.0418 268.517 79.6222C266.808 81.1701 264.652 81.9576 262.048 81.9847C259.411 82.0123 257.222 81.2538 255.481 79.7094C253.772 78.1646 252.905 76.2042 252.88 73.828C252.855 71.4518 253.681 69.4737 255.357 67.8936C257.066 66.3132 259.239 65.5092 261.875 65.4817ZM261.469 26.519C264.073 26.4918 266.246 27.2505 267.987 28.7949C269.728 30.3067 270.611 32.267 270.636 34.6758C270.662 37.0845 269.82 39.079 268.111 40.6595C266.402 42.2073 264.245 42.9948 261.641 43.022C259.004 43.0495 256.815 42.2911 255.074 40.7467C253.365 39.2019 252.498 37.2414 252.473 34.8653C252.449 32.4891 253.274 30.511 254.951 28.9309C256.66 27.3505 258.832 26.5465 261.469 26.519ZM520.439 23.8168C523.043 23.7896 525.216 24.5482 526.957 26.0926C528.698 27.6045 529.582 29.5648 529.607 31.9735C529.632 34.3822 528.79 36.3768 527.081 37.9572C525.372 39.5051 523.215 40.2926 520.611 40.3198C517.975 40.3473 515.786 39.5888 514.044 38.0444C512.335 36.4997 511.468 34.5392 511.444 32.163C511.419 29.7869 512.245 27.8087 513.921 26.2287C515.63 24.6483 517.803 23.8443 520.439 23.8168ZM518.478 97.9135L510.137 94.0941L511.762 90.7567C513.996 86.5013 515.142 82.4527 515.2 78.6108L515.073 66.4044L528.256 66.2668L528.317 76.8625C528.324 80.6061 527.403 84.4245 525.556 88.3177C523.708 92.2109 521.349 95.4095 518.478 97.9135ZM562.461 87.249C566.546 85.6438 568.632 81.2435 568.72 74.0482L568.609 63.453C568.533 56.1292 571.506 50.9547 577.53 47.9294C571.444 45.0305 568.364 39.9192 568.287 32.5954L568.177 22.0002C567.939 14.8083 565.761 10.4525 561.643 8.93292L564.63 0.307537C570.473 1.87426 574.879 4.4977 577.847 8.17787C580.815 11.8255 582.347 16.6437 582.442 22.6327L582.544 32.4466C582.613 39.0543 585.284 42.3306 590.557 42.2756L590.673 53.359C585.4 53.414 582.797 56.7128 582.866 63.2555L582.974 73.6553C582.866 85.1154 577.083 92.5166 565.627 95.859L562.461 87.249Z" fill="white" />
            <path d="M119.025 58.8664C118.849 63.8164 117.56 68.2084 115.159 72.0422C112.757 75.8435 109.353 78.8089 104.948 80.9383C100.575 83.0674 95.5573 84.1615 89.8936 84.2206C80.5516 84.318 73.1635 81.3514 67.7292 75.3205C62.2949 69.2896 59.5198 60.7244 59.404 49.6247L59.3673 46.1093C59.2946 39.1435 60.4355 33.044 62.7898 27.8108C65.1764 22.5448 68.6335 18.472 73.161 15.5926C77.6881 12.6806 82.9463 11.1934 88.9356 11.1309C97.5614 11.0409 104.518 13.247 109.807 17.7494C115.094 22.2192 118.138 28.4378 118.937 36.4052L101.848 36.5835C101.673 32.2556 100.55 29.1585 98.4797 27.2919C96.4094 25.4254 93.2747 24.5141 89.0757 24.5579C84.8116 24.6024 81.7034 26.2299 79.7511 29.4406C77.7988 32.6512 76.8104 37.7562 76.7858 44.7556L76.8382 49.7846C76.9174 57.3688 77.9179 62.7786 79.8398 66.0139C81.7942 69.2489 85.0988 70.8421 89.7535 70.7936C93.6921 70.7525 96.6933 69.7934 98.7571 67.9163C100.821 66.0392 101.897 63.0818 101.985 59.0442L119.025 58.8664ZM163.852 63.5747C163.826 61.0683 162.91 59.1247 161.106 57.7437C159.333 56.3624 156.21 54.9463 151.735 53.4955C147.26 52.0447 143.599 50.6343 140.752 49.2642C131.493 44.8358 126.823 38.6668 126.74 30.757C126.699 26.8184 127.802 23.3399 130.049 20.3215C132.329 17.2702 135.559 14.8927 139.741 13.1888C143.922 11.4523 148.633 10.5568 153.874 10.5021C158.984 10.4488 163.567 11.3125 167.622 13.0932C171.71 14.8735 174.895 17.4446 177.176 20.8064C179.457 24.1357 180.62 27.9649 180.665 32.2941L163.576 32.4724C163.546 29.5754 162.628 27.3388 160.821 25.7625C159.046 24.1859 156.646 23.4133 153.618 23.4449C150.559 23.4769 148.141 24.1857 146.365 25.5715C144.621 26.9244 143.76 28.6425 143.782 30.7257C143.801 32.5485 144.795 34.1984 146.763 35.6753C148.731 37.1197 152.182 38.6137 157.113 40.1574C162.045 41.6686 166.099 43.3191 169.275 45.1089C177.003 49.4556 180.908 55.5187 180.989 63.2982C181.054 69.5153 178.761 74.4224 174.111 78.0192C169.461 81.6161 163.05 83.4572 154.88 83.5425C149.119 83.6026 143.884 82.6318 139.175 80.63C134.499 78.5953 130.954 75.8002 128.54 72.2444C126.159 68.6558 124.944 64.5178 124.895 59.8306L142.081 59.6513C142.121 63.4597 143.127 66.2651 145.099 68.0675C147.103 69.8371 150.319 70.6987 154.746 70.6525C157.578 70.623 159.801 69.9975 161.416 68.7762C163.063 67.522 163.875 65.7881 163.852 63.5747ZM226.446 62.9216C226.42 60.4152 225.505 58.4715 223.7 57.0905C221.927 55.7092 218.804 54.2932 214.329 52.8424C209.854 51.3916 206.193 49.9811 203.347 48.611C194.088 44.1827 189.417 38.0136 189.334 30.1039C189.293 26.1653 190.396 22.6868 192.644 19.6684C194.923 16.6171 198.154 14.2395 202.335 12.5356C206.517 10.7992 211.228 9.90365 216.468 9.84897C221.579 9.79564 226.161 10.6593 230.217 12.44C234.305 14.2204 237.489 16.7915 239.77 20.1533C242.051 23.4825 243.214 27.3117 243.26 31.6409L226.171 31.8192C226.14 28.9223 225.222 26.6856 223.415 25.1093C221.641 23.5327 219.24 22.7602 216.213 22.7918C213.153 22.8237 210.735 23.5326 208.959 24.9184C207.215 26.2713 206.354 27.9893 206.376 30.0726C206.395 31.8954 207.389 33.5453 209.357 35.0222C211.326 36.4666 214.776 37.9606 219.708 39.5043C224.639 41.0154 228.693 42.6659 231.869 44.4558C239.597 48.8025 243.502 54.8656 243.583 62.6451C243.648 68.8622 241.355 73.7692 236.705 77.3661C232.055 80.963 225.645 82.8041 217.475 82.8893C211.713 82.9494 206.478 81.9786 201.769 79.9769C197.093 77.9422 193.548 75.147 191.134 71.5913C188.753 68.0026 187.538 63.8647 187.489 59.1775L204.676 58.9981C204.715 62.8065 205.721 65.6119 207.693 67.4144C209.698 69.1839 212.913 70.0456 217.34 69.9994C220.172 69.9698 222.395 69.3444 224.01 68.1231C225.657 66.8688 226.469 65.135 226.446 62.9216Z" fill="#1774E9" />
            <path d="M367.491 46.2635C367.56 52.8386 366.529 58.5951 364.4 63.533C362.27 68.4383 359.3 72.392 355.49 75.3942L367.059 84.356L356.557 93.4504L341.146 81.3059C339.716 81.5161 338.285 81.6287 336.853 81.6437C330.798 81.7068 325.413 80.3632 320.697 77.6128C315.98 74.8624 312.276 70.8969 309.586 65.7164C306.927 60.5355 305.514 54.5603 305.346 47.7909L305.306 44.0313C305.233 37.033 306.439 30.8677 308.922 25.5356C311.438 20.203 315.041 16.0636 319.731 13.1174C324.453 10.1708 329.874 8.66563 335.993 8.60178C342.015 8.53895 347.401 9.91512 352.15 12.7303C356.9 15.5455 360.604 19.5923 363.264 24.8709C365.955 30.1165 367.353 36.1569 367.457 42.9922L367.491 46.2635ZM350.029 43.467C349.956 36.4036 348.712 31.0614 346.298 27.4406C343.916 23.7869 340.527 21.9829 336.133 22.0288C331.609 22.076 328.226 23.918 325.985 27.5549C323.744 31.1918 322.644 36.4932 322.684 43.4593L322.718 46.7306C322.791 53.729 324.003 59.0877 326.353 62.8069C328.703 66.4935 332.156 68.313 336.713 68.2655C341.075 68.22 344.392 66.3461 346.665 62.6438C348.97 58.9411 350.103 53.6393 350.064 46.7383L350.029 43.467ZM407.238 74.2194C403.802 78.7151 399.122 80.9939 393.197 81.0557C387.403 81.1162 382.992 79.4857 379.962 76.1643C376.965 72.8099 375.433 67.9754 375.367 61.6606L375.01 27.434L391.464 27.2623L391.822 61.5866C391.869 66.1111 394.09 68.3504 398.485 68.3046C402.26 68.2652 404.932 66.8863 406.498 64.168L406.112 27.1095L422.664 26.9367L423.215 79.7659L407.786 79.9269L407.238 74.2194ZM449.629 79.4903L433.126 79.6625L432.575 26.8333L449.078 26.6611L449.629 79.4903ZM431.457 13.2212C431.432 10.8776 432.258 8.94828 433.935 7.43331C435.612 5.91833 437.802 5.14675 440.503 5.11856C443.205 5.09036 445.41 5.8161 447.118 7.29575C448.826 8.7754 449.693 10.687 449.717 13.0307C449.742 15.3743 448.915 17.3036 447.238 18.8186C445.561 20.3335 443.372 21.1051 440.67 21.1333C437.969 21.1615 435.764 20.4358 434.056 18.9561C432.347 17.4765 431.481 15.5648 431.457 13.2212ZM479.085 66.4869L503.156 66.2357L503.289 78.9304L458.418 79.3986L458.322 70.2194L481.435 39.0195L459.025 39.2533L458.892 26.5587L502.2 26.1068L502.293 34.993L479.085 66.4869Z" fill="#F45FB1" />
        </svg>
    );
}

Logo.propTypes = {
    className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
    margin: auto;
    display: block;
    @media screen and (max-width: 500px) {
        margin: 0;
    }
`;

export default QuizLogo;