import { motion } from "framer-motion";

const TrainLayer = () => {
  return (
    <div id="container">
      <svg
        width="1440"
        height="879"
        viewBox="0 0 1440 879"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Landscape" clipPath="url(#clip0_267_3)">
          <path
            id="Bridge"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 459H1440V881H0V845H81V520C81 492.386 58.6142 470 31 470H6C3.96946 470 1.96718 470.121 0 470.356V459ZM556 520C556 492.386 578.386 470 606 470H631C658.614 470 681 492.386 681 520V845H556V520ZM456 470C428.386 470 406 492.386 406 520V845H531V520C531 492.386 508.614 470 481 470H456ZM256 520C256 492.386 278.386 470 306 470H331C358.614 470 381 492.386 381 520V845H256V520ZM156 470C128.386 470 106 492.386 106 520V845H231V520C231 492.386 208.614 470 181 470H156ZM756 470C728.386 470 706 492.386 706 520V845H831V520C831 492.386 808.614 470 781 470H756ZM856 520C856 492.386 878.386 470 906 470H931C958.614 470 981 492.386 981 520V845H856V520ZM1056 470C1028.39 470 1006 492.386 1006 520V845H1131V520C1131 492.386 1108.61 470 1081 470H1056ZM1156 520C1156 492.386 1178.39 470 1206 470H1231C1258.61 470 1281 492.386 1281 520V845H1156V520ZM1356 470C1328.39 470 1306 492.386 1306 520V845H1431V520C1431 492.386 1408.61 470 1381 470H1356Z"
            fill="#17696C"
          />
          <motion.g
            id="Train2"
            initial={{ x: 1500 }}
            animate={{
              x: [1500, -1500],
            }}
            transition={{
              duration: 11,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <g id="Cariage 1">
              <path
                id="Carriage 1"
                d="M4 456.091C4 445.547 12.5473 437 23.0909 437H149C150.105 437 151 437.895 151 439V456C151 457.105 150.105 458 149 458H5.90909C4.85473 458 4 457.145 4 456.091V456.091Z"
                fill="#17696C"
              />
              <g id="windows">
                <path
                  id="Rectangle 39"
                  d="M26 444C26 442.895 26.8954 442 28 442H37C38.1046 442 39 442.895 39 444V446C39 447.105 38.1046 448 37 448H28C26.8954 448 26 447.105 26 446V444Z"
                  fill="white"
                />
                <path
                  id="Rectangle 40"
                  d="M43 444C43 442.895 43.8954 442 45 442H54C55.1046 442 56 442.895 56 444V446C56 447.105 55.1046 448 54 448H45C43.8954 448 43 447.105 43 446V444Z"
                  fill="white"
                />
                <path
                  id="Rectangle 41"
                  d="M60 444C60 442.895 60.8954 442 62 442H71C72.1046 442 73 442.895 73 444V446C73 447.105 72.1046 448 71 448H62C60.8954 448 60 447.105 60 446V444Z"
                  fill="white"
                />
                <path
                  id="Rectangle 42"
                  d="M77 444C77 442.895 77.8954 442 79 442H88C89.1046 442 90 442.895 90 444V446C90 447.105 89.1046 448 88 448H79C77.8954 448 77 447.105 77 446V444Z"
                  fill="white"
                />
                <path
                  id="Rectangle 43"
                  d="M94 444C94 442.895 94.8954 442 96 442H105C106.105 442 107 442.895 107 444V446C107 447.105 106.105 448 105 448H96C94.8954 448 94 447.105 94 446V444Z"
                  fill="white"
                />
                <path
                  id="Rectangle 44"
                  d="M111 444C111 442.895 111.895 442 113 442H122C123.105 442 124 442.895 124 444V446C124 447.105 123.105 448 122 448H113C111.895 448 111 447.105 111 446V444Z"
                  fill="white"
                />
                <path
                  id="Rectangle 45"
                  d="M128 444C128 442.895 128.895 442 130 442H139C140.105 442 141 442.895 141 444V446C141 447.105 140.105 448 139 448H130C128.895 448 128 447.105 128 446V444Z"
                  fill="white"
                />
              </g>
            </g>
            <g id="Cariage 2">
              <path
                id="Carriage 1_2"
                d="M287 439C287 437.895 286.105 437 285 437H154C152.895 437 152 437.895 152 439V456C152 457.105 152.895 458 154 458H285C286.105 458 287 457.105 287 456V439Z"
                fill="#17696C"
              />
              <g id="windows_2">
                <path
                  id="Rectangle 39_2"
                  d="M277 444C277 442.895 276.105 442 275 442H266C264.895 442 264 442.895 264 444V446C264 447.105 264.895 448 266 448H275C276.105 448 277 447.105 277 446V444Z"
                  fill="white"
                />
                <path
                  id="Rectangle 40_2"
                  d="M260 444C260 442.895 259.105 442 258 442H249C247.895 442 247 442.895 247 444V446C247 447.105 247.895 448 249 448H258C259.105 448 260 447.105 260 446V444Z"
                  fill="white"
                />
                <path
                  id="Rectangle 41_2"
                  d="M243 444C243 442.895 242.105 442 241 442H232C230.895 442 230 442.895 230 444V446C230 447.105 230.895 448 232 448H241C242.105 448 243 447.105 243 446V444Z"
                  fill="white"
                />
                <path
                  id="Rectangle 42_2"
                  d="M226 444C226 442.895 225.105 442 224 442H215C213.895 442 213 442.895 213 444V446C213 447.105 213.895 448 215 448H224C225.105 448 226 447.105 226 446V444Z"
                  fill="white"
                />
                <path
                  id="Rectangle 43_2"
                  d="M209 444C209 442.895 208.105 442 207 442H198C196.895 442 196 442.895 196 444V446C196 447.105 196.895 448 198 448H207C208.105 448 209 447.105 209 446V444Z"
                  fill="white"
                />
                <path
                  id="Rectangle 44_2"
                  d="M192 444C192 442.895 191.105 442 190 442H181C179.895 442 179 442.895 179 444V446C179 447.105 179.895 448 181 448H190C191.105 448 192 447.105 192 446V444Z"
                  fill="white"
                />
                <path
                  id="Rectangle 45_2"
                  d="M175 444C175 442.895 174.105 442 173 442H164C162.895 442 162 442.895 162 444V446C162 447.105 162.895 448 164 448H173C174.105 448 175 447.105 175 446V444Z"
                  fill="white"
                />
              </g>
            </g>
            <g id="Cariage 3">
              <path
                id="Carriage 1_3"
                d="M423 439C423 437.895 422.105 437 421 437H290C288.895 437 288 437.895 288 439V456C288 457.105 288.895 458 290 458H421C422.105 458 423 457.105 423 456V439Z"
                fill="#17696C"
              />
              <g id="windows_3">
                <path
                  id="Rectangle 39_3"
                  d="M413 444C413 442.895 412.105 442 411 442H402C400.895 442 400 442.895 400 444V446C400 447.105 400.895 448 402 448H411C412.105 448 413 447.105 413 446V444Z"
                  fill="white"
                />
                <path
                  id="Rectangle 40_3"
                  d="M396 444C396 442.895 395.105 442 394 442H385C383.895 442 383 442.895 383 444V446C383 447.105 383.895 448 385 448H394C395.105 448 396 447.105 396 446V444Z"
                  fill="white"
                />
                <path
                  id="Rectangle 41_3"
                  d="M379 444C379 442.895 378.105 442 377 442H368C366.895 442 366 442.895 366 444V446C366 447.105 366.895 448 368 448H377C378.105 448 379 447.105 379 446V444Z"
                  fill="white"
                />
                <path
                  id="Rectangle 42_3"
                  d="M362 444C362 442.895 361.105 442 360 442H351C349.895 442 349 442.895 349 444V446C349 447.105 349.895 448 351 448H360C361.105 448 362 447.105 362 446V444Z"
                  fill="white"
                />
                <path
                  id="Rectangle 43_3"
                  d="M345 444C345 442.895 344.105 442 343 442H334C332.895 442 332 442.895 332 444V446C332 447.105 332.895 448 334 448H343C344.105 448 345 447.105 345 446V444Z"
                  fill="white"
                />
                <path
                  id="Rectangle 44_3"
                  d="M328 444C328 442.895 327.105 442 326 442H317C315.895 442 315 442.895 315 444V446C315 447.105 315.895 448 317 448H326C327.105 448 328 447.105 328 446V444Z"
                  fill="white"
                />
                <path
                  id="Rectangle 45_3"
                  d="M311 444C311 442.895 310.105 442 309 442H300C298.895 442 298 442.895 298 444V446C298 447.105 298.895 448 300 448H309C310.105 448 311 447.105 311 446V444Z"
                  fill="white"
                />
              </g>
            </g>
            <g id="Cariage 4">
              <path
                id="Carriage 1_4"
                d="M571 456.091C571 445.547 562.453 437 551.909 437H426C424.895 437 424 437.895 424 439V456C424 457.105 424.895 458 426 458H569.091C570.145 458 571 457.145 571 456.091V456.091Z"
                fill="#17696C"
              />
              <g id="windows_4">
                <path
                  id="Rectangle 39_4"
                  d="M549 444C549 442.895 548.105 442 547 442H538C536.895 442 536 442.895 536 444V446C536 447.105 536.895 448 538 448H547C548.105 448 549 447.105 549 446V444Z"
                  fill="white"
                />
                <path
                  id="Rectangle 40_4"
                  d="M532 444C532 442.895 531.105 442 530 442H521C519.895 442 519 442.895 519 444V446C519 447.105 519.895 448 521 448H530C531.105 448 532 447.105 532 446V444Z"
                  fill="white"
                />
                <path
                  id="Rectangle 41_4"
                  d="M515 444C515 442.895 514.105 442 513 442H504C502.895 442 502 442.895 502 444V446C502 447.105 502.895 448 504 448H513C514.105 448 515 447.105 515 446V444Z"
                  fill="white"
                />
                <path
                  id="Rectangle 42_4"
                  d="M498 444C498 442.895 497.105 442 496 442H487C485.895 442 485 442.895 485 444V446C485 447.105 485.895 448 487 448H496C497.105 448 498 447.105 498 446V444Z"
                  fill="white"
                />
                <path
                  id="Rectangle 43_4"
                  d="M481 444C481 442.895 480.105 442 479 442H470C468.895 442 468 442.895 468 444V446C468 447.105 468.895 448 470 448H479C480.105 448 481 447.105 481 446V444Z"
                  fill="white"
                />
                <path
                  id="Rectangle 44_4"
                  d="M464 444C464 442.895 463.105 442 462 442H453C451.895 442 451 442.895 451 444V446C451 447.105 451.895 448 453 448H462C463.105 448 464 447.105 464 446V444Z"
                  fill="white"
                />
                <path
                  id="Rectangle 45_4"
                  d="M447 444C447 442.895 446.105 442 445 442H436C434.895 442 434 442.895 434 444V446C434 447.105 434.895 448 436 448H445C446.105 448 447 447.105 447 446V444Z"
                  fill="white"
                />
              </g>
            </g>
          </motion.g>
          <motion.g
            id="Train1"
            initial={{ x: -1500 }}
            animate={{
              x: [-1500, 1500],
            }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <g id="Cariage 1_2">
              <path
                id="Carriage 1_5"
                d="M695 456.091C695 445.547 703.547 437 714.091 437H840C841.105 437 842 437.895 842 439V456C842 457.105 841.105 458 840 458H696.909C695.855 458 695 457.145 695 456.091V456.091Z"
                fill="#17696C"
              />
              <g id="windows_5">
                <rect
                  id="Rectangle 39_5"
                  x="717"
                  y="442"
                  width="13"
                  height="6"
                  rx="2"
                  fill="white"
                />
                <rect
                  id="Rectangle 40_5"
                  x="734"
                  y="442"
                  width="13"
                  height="6"
                  rx="2"
                  fill="white"
                />
                <rect
                  id="Rectangle 41_5"
                  x="751"
                  y="442"
                  width="13"
                  height="6"
                  rx="2"
                  fill="white"
                />
                <rect
                  id="Rectangle 42_5"
                  x="768"
                  y="442"
                  width="13"
                  height="6"
                  rx="2"
                  fill="white"
                />
                <rect
                  id="Rectangle 43_5"
                  x="785"
                  y="442"
                  width="13"
                  height="6"
                  rx="2"
                  fill="white"
                />
                <rect
                  id="Rectangle 44_5"
                  x="802"
                  y="442"
                  width="13"
                  height="6"
                  rx="2"
                  fill="white"
                />
                <rect
                  id="Rectangle 45_5"
                  x="819"
                  y="442"
                  width="13"
                  height="6"
                  rx="2"
                  fill="white"
                />
              </g>
            </g>
            <g id="Cariage 2_2">
              <path
                id="Carriage 1_6"
                d="M978 439C978 437.895 977.105 437 976 437H845C843.895 437 843 437.895 843 439V456C843 457.105 843.895 458 845 458H976C977.105 458 978 457.105 978 456V439Z"
                fill="#17696C"
              />
              <g id="windows_6">
                <rect
                  id="Rectangle 39_6"
                  width="13"
                  height="6"
                  rx="2"
                  transform="matrix(-1 0 0 1 968 442)"
                  fill="white"
                />
                <rect
                  id="Rectangle 40_6"
                  width="13"
                  height="6"
                  rx="2"
                  transform="matrix(-1 0 0 1 951 442)"
                  fill="white"
                />
                <rect
                  id="Rectangle 41_6"
                  width="13"
                  height="6"
                  rx="2"
                  transform="matrix(-1 0 0 1 934 442)"
                  fill="white"
                />
                <rect
                  id="Rectangle 42_6"
                  width="13"
                  height="6"
                  rx="2"
                  transform="matrix(-1 0 0 1 917 442)"
                  fill="white"
                />
                <rect
                  id="Rectangle 43_6"
                  width="13"
                  height="6"
                  rx="2"
                  transform="matrix(-1 0 0 1 900 442)"
                  fill="white"
                />
                <rect
                  id="Rectangle 44_6"
                  width="13"
                  height="6"
                  rx="2"
                  transform="matrix(-1 0 0 1 883 442)"
                  fill="white"
                />
                <rect
                  id="Rectangle 45_6"
                  width="13"
                  height="6"
                  rx="2"
                  transform="matrix(-1 0 0 1 866 442)"
                  fill="white"
                />
              </g>
            </g>
            <g id="Cariage 3_2">
              <path
                id="Carriage 1_7"
                d="M1114 439C1114 437.895 1113.1 437 1112 437H981C979.895 437 979 437.895 979 439V456C979 457.105 979.895 458 981 458H1112C1113.1 458 1114 457.105 1114 456V439Z"
                fill="#17696C"
              />
              <g id="windows_7">
                <rect
                  id="Rectangle 39_7"
                  width="13"
                  height="6"
                  rx="2"
                  transform="matrix(-1 0 0 1 1104 442)"
                  fill="white"
                />
                <rect
                  id="Rectangle 40_7"
                  width="13"
                  height="6"
                  rx="2"
                  transform="matrix(-1 0 0 1 1087 442)"
                  fill="white"
                />
                <rect
                  id="Rectangle 41_7"
                  width="13"
                  height="6"
                  rx="2"
                  transform="matrix(-1 0 0 1 1070 442)"
                  fill="white"
                />
                <rect
                  id="Rectangle 42_7"
                  width="13"
                  height="6"
                  rx="2"
                  transform="matrix(-1 0 0 1 1053 442)"
                  fill="white"
                />
                <rect
                  id="Rectangle 43_7"
                  width="13"
                  height="6"
                  rx="2"
                  transform="matrix(-1 0 0 1 1036 442)"
                  fill="white"
                />
                <rect
                  id="Rectangle 44_7"
                  width="13"
                  height="6"
                  rx="2"
                  transform="matrix(-1 0 0 1 1019 442)"
                  fill="white"
                />
                <rect
                  id="Rectangle 45_7"
                  width="13"
                  height="6"
                  rx="2"
                  transform="matrix(-1 0 0 1 1002 442)"
                  fill="white"
                />
              </g>
            </g>
            <g id="Cariage 4_2">
              <path
                id="Carriage 1_8"
                d="M1262 456.091C1262 445.547 1253.45 437 1242.91 437H1117C1115.9 437 1115 437.895 1115 439V456C1115 457.105 1115.9 458 1117 458H1260.09C1261.15 458 1262 457.145 1262 456.091V456.091Z"
                fill="#17696C"
              />
              <g id="windows_8">
                <rect
                  id="Rectangle 39_8"
                  width="13"
                  height="6"
                  rx="2"
                  transform="matrix(-1 0 0 1 1240 442)"
                  fill="white"
                />
                <rect
                  id="Rectangle 40_8"
                  width="13"
                  height="6"
                  rx="2"
                  transform="matrix(-1 0 0 1 1223 442)"
                  fill="white"
                />
                <rect
                  id="Rectangle 41_8"
                  width="13"
                  height="6"
                  rx="2"
                  transform="matrix(-1 0 0 1 1206 442)"
                  fill="white"
                />
                <rect
                  id="Rectangle 42_8"
                  width="13"
                  height="6"
                  rx="2"
                  transform="matrix(-1 0 0 1 1189 442)"
                  fill="white"
                />
                <rect
                  id="Rectangle 43_8"
                  width="13"
                  height="6"
                  rx="2"
                  transform="matrix(-1 0 0 1 1172 442)"
                  fill="white"
                />
                <rect
                  id="Rectangle 44_8"
                  width="13"
                  height="6"
                  rx="2"
                  transform="matrix(-1 0 0 1 1155 442)"
                  fill="white"
                />
                <rect
                  id="Rectangle 45_8"
                  width="13"
                  height="6"
                  rx="2"
                  transform="matrix(-1 0 0 1 1138 442)"
                  fill="white"
                />
              </g>
            </g>
          </motion.g>
        </g>
        <defs>
          <clipPath id="clip0_267_3">
            <rect width="1440" height="879" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default TrainLayer;
