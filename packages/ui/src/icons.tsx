import { cva, VariantProps } from "class-variance-authority";

const iconStyles = cva(
  "ui-bg-primary ui-mr-medium ui-w-fit ui-rounded-full ui-p-small ui-items-center ui-justify-center hover: ui-cursor-pointer"
);
interface IconProps extends VariantProps<typeof iconStyles> {
  onClick: (event: any) => void;
}
export function EditIcon({ onClick }: IconProps) {
  return (
    <div onClick={(event) => onClick(event)} className={iconStyles({})}>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.7445 1.60221L20.3932 1.25094C19.5082 0.365899 18.0712 0.365899 17.1816 1.25094L2.52372 15.9088C2.52372 15.9088 2.5146 15.9179 2.5146 15.9225C2.49179 15.9498 2.46898 15.9772 2.45529 16.0137C2.45529 16.0137 2.44617 16.0228 2.44617 16.0274L1.5292 18.4863L0.612224 20.9407C0.566604 21.0685 0.593976 21.2053 0.689779 21.3011C0.75821 21.3695 0.844889 21.4015 0.93613 21.4015C0.972626 21.4015 1.01825 21.3924 1.05474 21.3787L3.50912 20.4617L5.9635 19.5402H5.97263L5.98175 19.531C6.01825 19.5128 6.05018 19.4945 6.07755 19.4672C6.07755 19.4672 6.08668 19.4672 6.08668 19.4581L20.7491 4.79564C21.1779 4.36681 21.4151 3.79656 21.4151 3.18524C21.4151 2.57393 21.1825 2.0128 20.7491 1.5794L20.7445 1.60221ZM1.51095 20.4845L1.98084 19.2345L2.76551 20.0192L1.51095 20.4845ZM3.46806 19.75L2.24087 18.5228L2.89781 16.771L5.21989 19.0977L3.46806 19.75ZM18.9745 5.61225L16.3832 3.02101L16.9307 2.47356L19.5219 5.0648L18.9745 5.61225ZM20.2609 4.32575L20.01 4.58123L17.4188 1.98999L17.6697 1.73451C18.2901 1.11864 19.2938 1.11864 19.9142 1.73451L20.2655 2.09035C20.5666 2.38688 20.7308 2.78834 20.7308 3.20805C20.7308 3.62776 20.5666 4.02922 20.2655 4.33031L20.2609 4.32575Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

export function DeleteIcon({ onClick }: IconProps) {
  return (
    <div onClick={(event) => onClick(event)} className={iconStyles({})}>
      <svg
        className="ui-w-[24px] ui-h-[24px] ui-text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.6"
          d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
        />
      </svg>
    </div>
  );
}

export function CloseIcon({ onClick }: IconProps) {
  return (
    <div onClick={(event) => onClick(event)} className={iconStyles({})}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="feather feather-x"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </div>
  );
}

export function LogoIcon() {
  return (
    <svg
      width="146"
      height="32"
      viewBox="0 0 146 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.149 26.2057L35.877 6.70864C37.3966 6.55734 39.5153 6.48169 42.233 6.48169C44.6152 6.48169 46.2649 6.85994 47.1822 7.613C48.0995 8.36607 48.4212 9.72433 48.1372 11.6809C47.9318 13.0942 47.5279 14.1499 46.9289 14.8445C46.3299 15.5425 45.4366 15.9483 44.2558 16.0583L44.2284 16.1993C46.816 16.4056 47.8668 18.1593 47.3773 21.457C47.0761 23.417 46.4395 24.734 45.464 25.4114C44.4885 26.0888 42.8764 26.4293 40.6277 26.4293C37.3487 26.4327 34.857 26.357 33.149 26.2057ZM36.2158 24.005L40.2101 24.0325C41.7469 24.0325 42.8251 23.8124 43.4446 23.3689C44.0641 22.9253 44.468 22.0553 44.6528 20.7555C44.8411 19.3628 44.6939 18.4241 44.2181 17.9427C43.7389 17.4613 42.7429 17.2137 41.2232 17.1931H37.1742L36.2158 24.005ZM37.4822 15.0164H41.3636C42.7121 15.0164 43.6842 14.7894 44.2763 14.339C44.8684 13.8885 45.2552 13.0392 45.4435 11.7944C45.6112 10.6081 45.4606 9.82749 44.9917 9.44924C44.5228 9.07443 43.5575 8.8853 42.096 8.8853H38.3276L37.4822 15.0164Z"
        fill="#47A138"
      />
      <path
        d="M60.3768 12.417H63.2176C62.2045 16.901 60.8833 20.6973 59.2507 23.8058C57.7892 26.5945 56.3379 28.5718 54.9038 29.7409C53.4697 30.91 51.7583 31.6631 49.7697 32.0001L49.2632 30.0504C50.4646 29.7684 51.5119 29.3454 52.4121 28.7781C53.3123 28.2141 54.1748 27.3545 54.9997 26.206H53.7333C53.302 26.206 52.9358 26.0891 52.638 25.8518C52.3368 25.618 52.1485 25.2913 52.0767 24.8752L49.4343 12.4136H52.306L54.387 23.5754C54.4418 23.8952 54.63 24.0568 54.9483 24.0568H56.3277C56.403 23.9261 56.5057 23.7301 56.6357 23.4791C56.7658 23.2247 56.8514 23.0596 56.889 22.984C58.5388 19.5384 59.7025 16.0173 60.3768 12.417Z"
        fill="#47A138"
      />
      <path
        d="M68.8139 14.5351L67.7152 22.2789C67.6228 22.9391 67.6809 23.3861 67.8966 23.62C68.1122 23.8572 68.5469 23.9741 69.2041 23.9741H71.2577L71.3706 26.0923C70.5458 26.3365 69.4779 26.4603 68.1635 26.4603C66.9451 26.4603 66.0688 26.1199 65.5349 25.4424C65.001 24.765 64.8161 23.7953 64.9873 22.5334L66.1133 14.5351H63.6113L63.8646 12.5579L66.4248 12.4169L67.0169 8.37646H69.6901L69.1288 12.4169H73.349L73.0683 14.5351H68.8139Z"
        fill="#47A138"
      />
      <path
        d="M84.6507 23.9192L84.8185 25.7555C83.487 26.2816 81.6011 26.5464 79.1641 26.5464C76.8196 26.5464 75.1972 25.9308 74.297 24.6964C73.3968 23.4619 73.1162 21.5466 73.4516 18.947C73.8076 16.2923 74.5332 14.4767 75.6319 13.507C76.7271 12.5373 78.5343 12.0525 81.0466 12.0525C83.1858 12.0525 84.637 12.4307 85.4072 13.1838C86.1773 13.9369 86.4579 15.0475 86.2526 16.5193C86.0267 17.8569 85.503 18.8232 84.6781 19.4146C83.8532 20.0095 82.5868 20.3706 80.8823 20.5012L76.1282 20.9242C76.1076 22.224 76.3814 23.1043 76.9428 23.5651C77.5041 24.0258 78.3872 24.2562 79.5851 24.2562C80.8618 24.2562 82.5492 24.1462 84.6507 23.9192ZM76.2959 18.8885L80.8823 18.4656C81.7448 18.4105 82.3746 18.2249 82.7682 17.9154C83.1619 17.6059 83.4151 17.0626 83.5281 16.2889C83.641 15.4052 83.4939 14.8584 83.0934 14.6487C82.6895 14.4423 81.8715 14.3392 80.6325 14.3392C79.2086 14.3392 78.1989 14.6349 77.6102 15.2298C77.0146 15.8212 76.5765 17.042 76.2959 18.8885Z"
        fill="#47A138"
      />
      <path
        d="M92.5538 6.42676L91.794 12.1349C91.6263 13.3797 91.3799 14.4319 91.0615 15.2985C91.9617 14.3941 92.9509 13.6307 94.029 13.0083C95.1072 12.3859 96.1066 12.0764 97.0239 12.0764C98.1123 12.0764 98.9475 12.2793 99.5259 12.6851C100.108 13.0908 100.519 13.8439 100.765 14.9443C101.008 16.0446 100.97 17.5576 100.652 19.4798C100.447 21.0238 100.156 22.2823 99.7792 23.252C99.4027 24.2217 98.9167 24.9438 98.3177 25.4149C97.7187 25.886 97.1095 26.1955 96.49 26.3468C95.8705 26.4981 95.073 26.5738 94.1009 26.5738C91.8145 26.5738 89.5076 26.2333 87.1802 25.5559L89.8533 6.42676H92.5538ZM91.0068 17.4476L90.0792 24.2286C91.4278 24.2836 92.4306 24.3146 93.0878 24.3146C94.8676 24.3146 96.0416 24.0292 96.6029 23.4515C97.1643 22.8772 97.5955 21.488 97.8967 19.2838C98.1603 17.231 98.1876 15.9105 97.9823 15.326C97.7769 14.7414 97.243 14.4491 96.3804 14.4491C95.049 14.4525 93.2589 15.4498 91.0068 17.4476Z"
        fill="#47A138"
      />
      <path
        d="M114.213 26.2057H112.074L112.187 23.6611C110.537 25.5833 108.569 26.5427 106.279 26.5427C104.609 26.5427 103.486 25.996 102.904 24.9025C102.322 23.809 102.22 21.8868 102.596 19.1393C102.801 17.6126 103.092 16.3643 103.469 15.3946C103.845 14.4249 104.342 13.7028 104.961 13.2317C105.581 12.7606 106.217 12.4443 106.875 12.2861C107.532 12.1279 108.374 12.0454 109.407 12.0454C111.639 12.0454 113.881 12.2896 116.13 12.7813L114.213 26.2057ZM112.159 21.2335L113.145 14.394C111.42 14.3562 110.455 14.339 110.249 14.339C109.274 14.339 108.535 14.3871 108.028 14.48C107.521 14.5728 107.076 14.8135 106.693 15.2021C106.31 15.5872 106.026 16.0824 105.848 16.6841C105.67 17.2859 105.495 18.1731 105.327 19.3388C105.064 21.3916 105.033 22.7121 105.228 23.2932C105.427 23.8778 105.964 24.1701 106.847 24.1701C107.71 24.1701 108.552 23.9294 109.38 23.4479C110.198 22.9734 111.129 22.2341 112.159 21.2335Z"
        fill="#47A138"
      />
      <path
        d="M121.301 12.417L121.161 15.3846C123.636 13.1632 125.802 12.0491 127.657 12.0491C128.821 12.0491 129.701 12.3826 130.3 13.0532C130.899 13.7237 131.104 14.6796 130.919 15.921L129.458 26.206H126.757L128.078 16.5984C128.191 15.7319 128.157 15.1438 127.979 14.8309C127.801 14.5215 127.411 14.3633 126.812 14.3633C126.042 14.3633 125.241 14.6005 124.406 15.0682C123.571 15.5393 122.479 16.313 121.13 17.3858L119.922 26.2025H117.194L119.135 12.4136H121.301V12.417Z"
        fill="#47A138"
      />
      <path
        d="M142.902 12.4169H145.688C144.901 14.8858 143.381 16.9284 141.132 18.548C141.413 18.9812 141.694 19.528 141.978 20.1882L144.651 26.2058H141.725L139.082 19.8478C138.237 20.3017 137.152 20.8278 135.82 21.4296L135.119 26.2058H132.418L135.174 6.42676H137.901L136.662 15.6939C136.495 16.8252 136.193 17.9531 135.762 19.0844C137.542 18.2351 139.086 17.2447 140.39 16.1031C141.687 14.9649 142.526 13.7373 142.902 12.4169Z"
        fill="#47A138"
      />
      <path
        d="M20.1667 6.53687H6.69141V20.0748H20.1667V6.53687Z"
        fill="#47A138"
      />
      <path d="M6.64692 0H0.0924072V6.49216H6.64692V0Z" fill="#47A138" />
      <path d="M26.5809 0H20.1188V6.49216H26.5809V0Z" fill="#47A138" />
      <path
        d="M33.149 26.2057L35.877 6.70864C37.3966 6.55734 39.5153 6.48169 42.233 6.48169C44.6152 6.48169 46.2649 6.85994 47.1822 7.613C48.0995 8.36607 48.4212 9.72433 48.1372 11.6809C47.9318 13.0942 47.5279 14.1499 46.9289 14.8445C46.3299 15.5425 45.4366 15.9483 44.2558 16.0583L44.2284 16.1993C46.816 16.4056 47.8668 18.1593 47.3773 21.457C47.0761 23.417 46.4395 24.734 45.464 25.4114C44.4885 26.0888 42.8764 26.4293 40.6277 26.4293C37.3487 26.4327 34.857 26.357 33.149 26.2057ZM36.2158 24.005L40.2101 24.0325C41.7469 24.0325 42.8251 23.8124 43.4446 23.3689C44.0641 22.9253 44.468 22.0553 44.6528 20.7555C44.8411 19.3628 44.6939 18.4241 44.2181 17.9427C43.7389 17.4613 42.7429 17.2137 41.2232 17.1931H37.1742L36.2158 24.005ZM37.4822 15.0164H41.3636C42.7121 15.0164 43.6842 14.7894 44.2763 14.339C44.8684 13.8885 45.2552 13.0392 45.4435 11.7944C45.6112 10.6081 45.4606 9.82749 44.9917 9.44924C44.5228 9.07443 43.5575 8.8853 42.096 8.8853H38.3276L37.4822 15.0164Z"
        fill="#47A138"
      />
      <path
        d="M60.3768 12.417H63.2176C62.2045 16.901 60.8833 20.6973 59.2507 23.8058C57.7892 26.5945 56.3379 28.5718 54.9038 29.7409C53.4697 30.91 51.7583 31.6631 49.7697 32.0001L49.2632 30.0504C50.4646 29.7684 51.5119 29.3454 52.4121 28.7781C53.3123 28.2141 54.1748 27.3545 54.9997 26.206H53.7333C53.302 26.206 52.9358 26.0891 52.638 25.8518C52.3368 25.618 52.1485 25.2913 52.0767 24.8752L49.4343 12.4136H52.306L54.387 23.5754C54.4418 23.8952 54.63 24.0568 54.9483 24.0568H56.3277C56.403 23.9261 56.5057 23.7301 56.6357 23.4791C56.7658 23.2247 56.8514 23.0596 56.889 22.984C58.5388 19.5384 59.7025 16.0173 60.3768 12.417Z"
        fill="#47A138"
      />
      <path
        d="M68.8139 14.5351L67.7152 22.2789C67.6228 22.9391 67.6809 23.3861 67.8966 23.62C68.1122 23.8572 68.5469 23.9741 69.2041 23.9741H71.2577L71.3706 26.0923C70.5458 26.3365 69.4779 26.4603 68.1635 26.4603C66.9451 26.4603 66.0688 26.1199 65.5349 25.4424C65.001 24.765 64.8161 23.7953 64.9873 22.5334L66.1133 14.5351H63.6113L63.8646 12.5579L66.4248 12.4169L67.0169 8.37646H69.6901L69.1288 12.4169H73.349L73.0683 14.5351H68.8139Z"
        fill="#47A138"
      />
      <path
        d="M84.6507 23.9192L84.8185 25.7555C83.487 26.2816 81.6011 26.5464 79.1641 26.5464C76.8196 26.5464 75.1972 25.9308 74.297 24.6964C73.3968 23.4619 73.1162 21.5466 73.4516 18.947C73.8076 16.2923 74.5332 14.4767 75.6319 13.507C76.7271 12.5373 78.5343 12.0525 81.0466 12.0525C83.1858 12.0525 84.637 12.4307 85.4072 13.1838C86.1773 13.9369 86.4579 15.0475 86.2526 16.5193C86.0267 17.8569 85.503 18.8232 84.6781 19.4146C83.8532 20.0095 82.5868 20.3706 80.8823 20.5012L76.1282 20.9242C76.1076 22.224 76.3814 23.1043 76.9428 23.5651C77.5041 24.0258 78.3872 24.2562 79.5851 24.2562C80.8618 24.2562 82.5492 24.1462 84.6507 23.9192ZM76.2959 18.8885L80.8823 18.4656C81.7448 18.4105 82.3746 18.2249 82.7682 17.9154C83.1619 17.6059 83.4151 17.0626 83.5281 16.2889C83.641 15.4052 83.4939 14.8584 83.0934 14.6487C82.6895 14.4423 81.8715 14.3392 80.6325 14.3392C79.2086 14.3392 78.1989 14.6349 77.6102 15.2298C77.0146 15.8212 76.5765 17.042 76.2959 18.8885Z"
        fill="#47A138"
      />
      <path
        d="M92.5538 6.42676L91.794 12.1349C91.6263 13.3797 91.3799 14.4319 91.0615 15.2985C91.9617 14.3941 92.9509 13.6307 94.029 13.0083C95.1072 12.3859 96.1066 12.0764 97.0239 12.0764C98.1123 12.0764 98.9475 12.2793 99.5259 12.6851C100.108 13.0908 100.519 13.8439 100.765 14.9443C101.008 16.0446 100.97 17.5576 100.652 19.4798C100.447 21.0238 100.156 22.2823 99.7792 23.252C99.4027 24.2217 98.9167 24.9438 98.3177 25.4149C97.7187 25.886 97.1095 26.1955 96.49 26.3468C95.8705 26.4981 95.073 26.5738 94.1009 26.5738C91.8145 26.5738 89.5076 26.2333 87.1802 25.5559L89.8533 6.42676H92.5538ZM91.0068 17.4476L90.0792 24.2286C91.4278 24.2836 92.4306 24.3146 93.0878 24.3146C94.8676 24.3146 96.0416 24.0292 96.6029 23.4515C97.1643 22.8772 97.5955 21.488 97.8967 19.2838C98.1603 17.231 98.1876 15.9105 97.9823 15.326C97.7769 14.7414 97.243 14.4491 96.3804 14.4491C95.049 14.4525 93.2589 15.4498 91.0068 17.4476Z"
        fill="#47A138"
      />
      <path
        d="M114.213 26.2057H112.074L112.187 23.6611C110.537 25.5833 108.569 26.5427 106.279 26.5427C104.609 26.5427 103.486 25.996 102.904 24.9025C102.322 23.809 102.22 21.8868 102.596 19.1393C102.801 17.6126 103.092 16.3643 103.469 15.3946C103.845 14.4249 104.342 13.7028 104.961 13.2317C105.581 12.7606 106.217 12.4443 106.875 12.2861C107.532 12.1279 108.374 12.0454 109.407 12.0454C111.639 12.0454 113.881 12.2896 116.13 12.7813L114.213 26.2057ZM112.159 21.2335L113.145 14.394C111.42 14.3562 110.455 14.339 110.249 14.339C109.274 14.339 108.535 14.3871 108.028 14.48C107.521 14.5728 107.076 14.8135 106.693 15.2021C106.31 15.5872 106.026 16.0824 105.848 16.6841C105.67 17.2859 105.495 18.1731 105.327 19.3388C105.064 21.3916 105.033 22.7121 105.228 23.2932C105.427 23.8778 105.964 24.1701 106.847 24.1701C107.71 24.1701 108.552 23.9294 109.38 23.4479C110.198 22.9734 111.129 22.2341 112.159 21.2335Z"
        fill="#47A138"
      />
      <path
        d="M121.301 12.417L121.161 15.3846C123.636 13.1632 125.802 12.0491 127.657 12.0491C128.821 12.0491 129.701 12.3826 130.3 13.0532C130.899 13.7237 131.104 14.6796 130.919 15.921L129.458 26.206H126.757L128.078 16.5984C128.191 15.7319 128.157 15.1438 127.979 14.8309C127.801 14.5215 127.411 14.3633 126.812 14.3633C126.042 14.3633 125.241 14.6005 124.406 15.0682C123.571 15.5393 122.479 16.313 121.13 17.3858L119.922 26.2025H117.194L119.135 12.4136H121.301V12.417Z"
        fill="#47A138"
      />
      <path
        d="M142.902 12.4169H145.688C144.901 14.8858 143.381 16.9284 141.132 18.548C141.413 18.9812 141.694 19.528 141.978 20.1882L144.651 26.2058H141.725L139.082 19.8478C138.237 20.3017 137.152 20.8278 135.82 21.4296L135.119 26.2058H132.418L135.174 6.42676H137.901L136.662 15.6939C136.495 16.8252 136.193 17.9531 135.762 19.0844C137.542 18.2351 139.086 17.2447 140.39 16.1031C141.687 14.9649 142.526 13.7373 142.902 12.4169Z"
        fill="#47A138"
      />
      <path d="M13.4753 20.03H0V26.8007H13.4753V20.03Z" fill="#47A138" />
      <path
        d="M20.1667 6.53687H6.69141V20.0748H20.1667V6.53687Z"
        fill="#47A138"
      />
      <path d="M6.64692 0H0.0924072V6.49216H6.64692V0Z" fill="#47A138" />
      <path d="M26.5809 0H20.1188V6.49216H26.5809V0Z" fill="#47A138" />
    </svg>
  );
}

export function LogoIconWhite() {
  return (
    <svg
      width="146"
      height="32"
      viewBox="0 0 146 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.305 26.2059L36.0329 6.70882C37.5526 6.55752 39.6713 6.48187 42.3889 6.48187C44.7711 6.48187 46.4209 6.86012 47.3382 7.61319C48.2554 8.36625 48.5772 9.72451 48.2931 11.6811C48.0877 13.0944 47.6838 14.15 47.0849 14.8446C46.4859 15.5427 45.5926 15.9485 44.4117 16.0585L44.3843 16.1995C46.9719 16.4058 48.0227 18.1595 47.5333 21.4572C47.2321 23.4172 46.5954 24.7342 45.6199 25.4116C44.6445 26.089 43.0324 26.4294 40.7836 26.4294C37.5047 26.4329 35.0129 26.3572 33.305 26.2059ZM36.3718 24.0052L40.3661 24.0327C41.9029 24.0327 42.981 23.8126 43.6005 23.369C44.2201 22.9255 44.6239 22.0555 44.8088 20.7557C44.997 19.363 44.8498 18.4243 44.3741 17.9429C43.8949 17.4615 42.8989 17.2139 41.3792 17.1932H37.3301L36.3718 24.0052ZM37.6382 15.0166H41.5195C42.8681 15.0166 43.8401 14.7896 44.4323 14.3392C45.0244 13.8887 45.4112 13.0394 45.5994 11.7946C45.7671 10.6082 45.6165 9.82767 45.1476 9.44942C44.6787 9.07461 43.7135 8.88548 42.252 8.88548H38.4836L37.6382 15.0166Z"
        fill="white"
      />
      <path
        d="M60.5328 12.417H63.3736C62.3605 16.9009 61.0393 20.6972 59.4067 23.8057C57.9452 26.5945 56.494 28.5717 55.0598 29.7408C53.6257 30.91 51.9144 31.663 49.9258 32L49.4192 30.0503C50.6206 29.7683 51.6679 29.3454 52.5681 28.778C53.4683 28.2141 54.3308 27.3544 55.1557 26.2059H53.8893C53.458 26.2059 53.0918 26.089 52.794 25.8517C52.4928 25.6179 52.3045 25.2912 52.2327 24.8752L49.5903 12.4135H52.462L54.543 23.5753C54.5978 23.8951 54.786 24.0568 55.1043 24.0568H56.4837C56.559 23.9261 56.6617 23.7301 56.7917 23.4791C56.9218 23.2246 57.0074 23.0595 57.045 22.9839C58.6948 19.5384 59.8585 16.0172 60.5328 12.417Z"
        fill="white"
      />
      <path
        d="M68.9697 14.5351L67.8711 22.279C67.7786 22.9392 67.8368 23.3862 68.0525 23.62C68.2681 23.8573 68.7028 23.9742 69.3599 23.9742H71.4136L71.5265 26.0924C70.7016 26.3366 69.6338 26.4603 68.3194 26.4603C67.1009 26.4603 66.2247 26.1199 65.6908 25.4425C65.1568 24.7651 64.972 23.7954 65.1431 22.5334L66.2692 14.5351H63.7672L64.0205 12.5579L66.5807 12.4169L67.1728 8.37653H69.846L69.2846 12.4169H73.5049L73.2242 14.5351H68.9697Z"
        fill="white"
      />
      <path
        d="M84.8067 23.9192L84.9745 25.7554C83.643 26.2815 81.7571 26.5463 79.3201 26.5463C76.9756 26.5463 75.3532 25.9308 74.453 24.6963C73.5528 23.4618 73.2722 21.5465 73.6076 18.9469C73.9636 16.2923 74.6892 14.4767 75.7879 13.507C76.8831 12.5373 78.6903 12.0524 81.2026 12.0524C83.3418 12.0524 84.7931 12.4307 85.5632 13.1837C86.3333 13.9368 86.6139 15.0475 86.4086 16.5192C86.1827 17.8569 85.659 18.8231 84.8341 19.4146C84.0092 20.0094 82.7428 20.3705 81.0383 20.5012L76.2842 20.9241C76.2636 22.2239 76.5374 23.1042 77.0988 23.565C77.6601 24.0258 78.5432 24.2562 79.7411 24.2562C81.0178 24.2562 82.7052 24.1461 84.8067 23.9192ZM76.4519 18.8884L81.0383 18.4655C81.9009 18.4105 82.5306 18.2248 82.9243 17.9153C83.3179 17.6058 83.5711 17.0625 83.6841 16.2888C83.797 15.4051 83.6499 14.8584 83.2494 14.6486C82.8455 14.4423 82.0275 14.3391 80.7885 14.3391C79.3646 14.3391 78.3549 14.6348 77.7662 15.2297C77.1707 15.8212 76.7325 17.0419 76.4519 18.8884Z"
        fill="white"
      />
      <path
        d="M92.7097 6.42682L91.9499 12.135C91.7822 13.3798 91.5357 14.432 91.2174 15.2985C92.1176 14.3942 93.1068 13.6308 94.1849 13.0084C95.2631 12.386 96.2625 12.0765 97.1798 12.0765C98.2682 12.0765 99.1034 12.2794 99.6818 12.6851C100.264 13.0909 100.674 13.844 100.921 14.9443C101.164 16.0447 101.126 17.5577 100.808 19.4799C100.603 21.0239 100.312 22.2824 99.9351 23.2521C99.5586 24.2218 99.0726 24.9439 98.4736 25.415C97.8746 25.8861 97.2654 26.1956 96.6459 26.3469C96.0263 26.4982 95.2288 26.5738 94.2568 26.5738C91.9704 26.5738 89.6635 26.2334 87.3361 25.556L90.0092 6.42682H92.7097ZM91.1627 17.4477L90.2351 24.2287C91.5836 24.2837 92.5865 24.3146 93.2437 24.3146C95.0235 24.3146 96.1975 24.0292 96.7588 23.4515C97.3201 22.8773 97.7514 21.4881 98.0526 19.2839C98.3162 17.231 98.3435 15.9106 98.1382 15.326C97.9328 14.7415 97.3989 14.4492 96.5363 14.4492C95.2049 14.4526 93.4148 15.4498 91.1627 17.4477Z"
        fill="white"
      />
      <path
        d="M114.369 26.2059H112.23L112.342 23.6613C110.693 25.5835 108.725 26.5429 106.435 26.5429C104.765 26.5429 103.642 25.9962 103.06 24.9027C102.478 23.8092 102.376 21.887 102.752 19.1395C102.957 17.6128 103.248 16.3645 103.625 15.3948C104.001 14.4251 104.498 13.703 105.117 13.2319C105.737 12.7608 106.373 12.4445 107.03 12.2863C107.688 12.1281 108.53 12.0456 109.563 12.0456C111.795 12.0456 114.037 12.2897 116.285 12.7815L114.369 26.2059ZM112.315 21.2336L113.301 14.3942C111.576 14.3564 110.611 14.3392 110.405 14.3392C109.43 14.3392 108.69 14.3873 108.184 14.4802C107.677 14.573 107.232 14.8137 106.849 15.2023C106.466 15.5874 106.182 16.0826 106.004 16.6843C105.826 17.2861 105.651 18.1733 105.483 19.339C105.22 21.3918 105.189 22.7123 105.384 23.2934C105.583 23.878 106.12 24.1702 107.003 24.1702C107.866 24.1702 108.708 23.9295 109.536 23.4481C110.354 22.9736 111.285 22.2343 112.315 21.2336Z"
        fill="white"
      />
      <path
        d="M121.457 12.417L121.317 15.3846C123.792 13.1632 125.958 12.0491 127.813 12.0491C128.977 12.0491 129.857 12.3826 130.456 13.0532C131.055 13.7237 131.26 14.6796 131.075 15.921L129.614 26.206H126.913L128.234 16.5984C128.347 15.7319 128.313 15.1438 128.135 14.8309C127.957 14.5215 127.567 14.3633 126.968 14.3633C126.198 14.3633 125.397 14.6005 124.562 15.0682C123.727 15.5393 122.635 16.313 121.286 17.3858L120.078 26.2025H117.35L119.291 12.4136H121.457V12.417Z"
        fill="white"
      />
      <path
        d="M143.058 12.4169H145.844C145.057 14.8859 143.537 16.9284 141.288 18.548C141.569 18.9813 141.85 19.528 142.134 20.1883L144.807 26.2059H141.881L139.238 19.8478C138.393 20.3017 137.308 20.8278 135.976 21.4296L135.275 26.2059H132.574L135.33 6.42682H138.057L136.818 15.694C136.651 16.8253 136.349 17.9531 135.918 19.0845C137.698 18.2351 139.242 17.2448 140.546 16.1032C141.843 14.965 142.682 13.7374 143.058 12.4169Z"
        fill="white"
      />
      <path d="M13.6311 20.03H0.155884V26.8007H13.6311V20.03Z" fill="white" />
      <path
        d="M20.3225 6.53687H6.84729V20.0748H20.3225V6.53687Z"
        fill="white"
      />
      <path d="M6.8028 0H0.248291V6.49216H6.8028V0Z" fill="white" />
      <path d="M26.7368 0H20.2747V6.49216H26.7368V0Z" fill="white" />
    </svg>
  );
}

export function InstagramIcon() {
  return (
    <svg
      className="hover:ui-cursor-pointer"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.0352 5.28998C22.0752 5.28998 21.3052 6.06998 21.3052 7.01998C21.3052 7.96998 22.0852 8.75998 23.0352 8.75998C23.9852 8.75998 24.7652 7.97998 24.7652 7.01998C24.7652 6.05998 23.9852 5.28998 23.0352 5.28998Z"
        fill="white"
      />
      <path
        d="M15.3252 7.51001C11.3052 7.51001 8.03516 10.78 8.03516 14.8C8.03516 18.82 11.3052 22.09 15.3252 22.09C19.3452 22.09 22.6152 18.82 22.6152 14.8C22.6152 10.78 19.3452 7.51001 15.3252 7.51001ZM15.3252 19.47C12.7552 19.47 10.6552 17.38 10.6552 14.8C10.6552 12.22 12.7452 10.13 15.3252 10.13C17.9052 10.13 19.9952 12.22 19.9952 14.8C19.9952 17.38 17.9052 19.47 15.3252 19.47Z"
        fill="white"
      />
      <path
        d="M21.115 29.6H9.29503C4.39503 29.6 0.405029 25.61 0.405029 20.71V8.89C0.405029 3.99 4.39503 0 9.29503 0H21.105C26.005 0 29.995 3.99 29.995 8.89V20.71C29.995 25.61 26.005 29.6 21.105 29.6H21.115ZM9.29503 2.79C5.92503 2.79 3.19503 5.53 3.19503 8.89V20.71C3.19503 24.08 5.93503 26.81 9.29503 26.81H21.105C24.475 26.81 27.215 24.07 27.215 20.71V8.89C27.215 5.52 24.475 2.79 21.105 2.79H9.29503Z"
        fill="white"
      />
    </svg>
  );
}

export function WhatsappIcon() {
  return (
    <svg
      className="hover:ui-cursor-pointer"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.00499511 29.6L2.12499 21.68C0.924995 19.51 0.294995 17.08 0.294995 14.62C0.294995 6.56 6.85499 0 14.905 0C22.955 0 29.525 6.56 29.525 14.62C29.525 22.68 22.965 29.24 14.905 29.24C12.485 29.24 10.095 28.63 7.95499 27.47L-0.00500488 29.6H0.00499511ZM8.355 24.5L8.855 24.8C10.695 25.9 12.785 26.48 14.905 26.48C21.445 26.48 26.755 21.16 26.755 14.63C26.755 8.1 21.445 2.77 14.905 2.77C8.365 2.77 3.055 8.08 3.055 14.62C3.055 16.78 3.65499 18.9 4.785 20.77L5.095 21.27L3.915 25.69L8.355 24.5Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.345 16.65C19.745 16.29 18.965 15.89 18.255 16.18C17.715 16.4 17.365 17.25 17.015 17.69C16.835 17.91 16.615 17.95 16.345 17.84C14.305 17.03 12.745 15.66 11.615 13.79C11.425 13.5 11.455 13.27 11.685 13C12.025 12.6 12.455 12.14 12.545 11.6C12.635 11.06 12.385 10.43 12.165 9.95001C11.875 9.34001 11.565 8.46001 10.945 8.11001C10.375 7.79001 9.63503 7.97001 9.13503 8.38001C8.26503 9.09001 7.84503 10.2 7.85503 11.3C7.85503 11.61 7.89503 11.92 7.96503 12.23C8.14503 12.96 8.47503 13.63 8.85503 14.28C9.13503 14.77 9.44503 15.24 9.78503 15.69C10.875 17.17 12.235 18.46 13.805 19.42C14.595 19.9 15.435 20.32 16.315 20.61C17.295 20.93 18.175 21.27 19.235 21.07C20.345 20.86 21.445 20.17 21.885 19.1C22.015 18.78 22.085 18.43 22.005 18.1C21.855 17.41 20.915 17 20.355 16.66L20.345 16.65Z"
        fill="white"
      />
    </svg>
  );
}

export function YoutubeIcon() {
  return (
    <svg
      className="hover:ui-cursor-pointer"
      width="31"
      height="22"
      viewBox="0 0 31 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.585 6.87502C30.585 3.23502 27.635 0.275024 23.985 0.275024H7.11502C3.47502 0.285024 0.525024 3.23502 0.525024 6.87502V14.725C0.525024 18.365 3.47502 21.325 7.12502 21.325H23.995C27.635 21.325 30.595 18.375 30.595 14.725V6.87502H30.585ZM20.665 11.385L13.095 15.125C12.795 15.285 11.795 15.075 11.795 14.735V7.05502C11.795 6.71502 12.815 6.49502 13.105 6.66502L20.345 10.605C20.645 10.775 20.965 11.215 20.665 11.385Z"
        fill="white"
      />
    </svg>
  );
}

export function HamburguerMenu() {
  return (
    <svg
      width="24"
      height="16"
      viewBox="0 0 24 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H24V2.6875H0V0ZM0 9.3125V6.6875H24V9.3125H0ZM0 16V13.3125H24V16H0Z"
        fill="#47A138"
      />
    </svg>
  );
}

export function HamburguerMenuVariant({ onClick }: IconProps) {
  return (
    <div onClick={(event) => onClick(event)} className={iconStyles({})}>
      <svg
        className="ui-text-negative"
        width="24"
        height="16"
        viewBox="0 0 24 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke="currentColor"
          d="M0 0H24V2.6875H0V0ZM0 9.3125V6.6875H24V9.3125H0ZM0 16V13.3125H24V16H0Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

export function ProfileIcon() {
  return (
    <svg
      className="ui-w-10 ui-h-10 ui-text-negative ui-ml-big"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
}