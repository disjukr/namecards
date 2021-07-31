import * as React from 'react';
import styles from './index.module.css';
import { cx, SvgProp, BaseCardProp } from '../misc';

export interface SynapsoftFrontProps extends BaseCardProp {
  name: string;
  designation: string;
  department: string;
  mobile: string;
  email: string;
}

export const SynapsoftFront: React.FC<SynapsoftFrontProps> = ({
  className,
  name,
  designation,
  department,
  mobile,
  email,
  ...props
}) => {
  return (
    <address className={cx(styles.card, styles.front, className)} {...props}>
      <SynapsoftLogo className={styles.logo} />
      <h1 className={styles.name}>{name}</h1>
      <div className={styles.a}>
        <strong>{designation}</strong>
        <span className={styles.slash}> / </span>
        <span>{department}</span>
      </div>
      <div className={styles.b}>
        <strong>주식회사 사이냅소프트</strong>
        <div>서울특별시 구로구 디지털로33길 12, 906</div>
        <div>(구로동, 우림이비지센터2차 9층)</div>
      </div>
      <dl className={styles.c}>
        <div className={styles.col}>
          <div>
            <dt>Tel</dt>
            <dd>02-890-3420</dd>
          </div>
          <div>
            <dt>Mobile</dt>
            <dd>{mobile}</dd>
          </div>
        </div>
        <div className={styles.col}>
          <div>
            <dt>Fax</dt>
            <dd>0303-0950-0910</dd>
          </div>
          <div>
            <dt>E-mail</dt>
            <dd>{email}</dd>
          </div>
        </div>
      </dl>
      <div className={styles.d}>
        <div>www.synapsoft.co.kr</div>
        <div>Software that works!</div>
      </div>
    </address>
  );
};

export const SynapsoftBack: React.FC<BaseCardProp> = ({ className }) => {
  return (
    <div
      className={cx(styles.card, styles.back, className)}
      role='presentation'
    >
      <div className={styles.a}>
        <span className={styles.synap}>Synap</span>
        <span className={styles.office}>Office</span>
      </div>
      <div className={styles.b}>
        <div className={cx(styles.box, styles.word)}>
          <div className={styles.icon}>
            <div />
            <div />
            <div />
          </div>
          <div className={styles.text}>word</div>
        </div>
        <div className={cx(styles.box, styles.slide)}>
          <div className={styles.icon}>
            <div className={styles.a}>
              <div />
              <div />
              <div />
            </div>
            <div className={styles.b} />
          </div>
          <div className={styles.text}>slide</div>
        </div>
        <div className={cx(styles.box, styles.cell)}>
          <div className={styles.icon}>
            <div>
              <div />
              <div />
              <div />
            </div>
            <div>
              <div />
              <div />
              <div />
            </div>
            <div>
              <div />
              <div />
              <div />
            </div>
          </div>
          <div className={styles.text}>cell</div>
        </div>
        <div className={cx(styles.box, styles.form)}>
          <div className={styles.icon}>
            <div>
              <div className={styles.checkbox}>
                <div className={styles.check} />
              </div>
              <div className={styles.line} />
            </div>
            <div>
              <div className={styles.checkbox} />
              <div className={styles.line} />
            </div>
          </div>
          <div className={styles.text}>form</div>
        </div>
      </div>
      <div className={styles.c}>
        <div>
          클라우드와 모바일에 최적화된 <strong>오피스 솔루션</strong>
        </div>
        <div>synapoffice.com</div>
      </div>
    </div>
  );
};

export const SynapsoftLogo: React.FC<SvgProp> = (props) => {
  return (
    <svg viewBox='0 0 9660 3090' {...props}>
      <g fill='#f39700'>
        <path d='M280 2415 l0 -165 38 -19 c53 -28 129 -92 166 -138 17 -22 170 -308 341 -636 l310 -596 173 -1 c94 0 172 2 172 5 0 3 -159 310 -352 681 -335 642 -357 680 -422 750 -86 93 -213 189 -321 243 -46 22 -88 41 -94 41 -8 0 -11 -52 -11 -165z'></path>
        <path d='M1090 2144 c0 -3 179 -349 397 -767 l398 -762 85 -89 c129 -134 280 -241 418 -295 l52 -21 0 188 0 187 -53 29 c-28 16 -88 66 -132 110 l-80 81 -349 673 -349 672 -194 0 c-106 0 -193 -3 -193 -6z'></path>
      </g>
      <g fill='#7d7d7d'>
        <path d='M5136 2863 c6 -28 94 -591 94 -603 0 -6 39 -10 105 -10 l106 0 -6 38 c-4 20 -9 45 -12 55 -4 16 11 17 210 17 232 0 227 1 227 -55 0 -52 5 -55 111 -55 72 0 99 3 99 13 0 6 -21 148 -47 315 l-47 302 -422 0 c-397 0 -422 -1 -418 -17z m668 -213 c3 -16 9 -43 12 -60 l6 -30 -215 0 -215 0 -6 30 c-3 17 -9 44 -12 60 l-6 30 215 0 215 0 6 -30z'></path>
        <path d='M6241 2533 c0 -16 6 -59 12 -98 l12 -70 163 -3 162 -2 0 -24 c0 -13 3 -38 6 -55 l7 -31 104 0 c95 0 104 2 100 18 -3 9 -8 34 -12 55 l-6 37 161 0 c149 0 161 1 156 18 -3 9 -10 54 -17 100 l-11 82 -419 0 -419 0 1 -27z'></path>
        <path d='M7280 2552 c0 -5 5 -35 10 -68 6 -32 13 -74 16 -91 l5 -33 419 0 c314 0 420 3 420 12 0 12 -18 128 -26 166 l-4 22 -420 0 c-231 0 -420 -4 -420 -8z'></path>
        <path d='M8344 2528 c3 -18 10 -63 17 -100 l11 -68 419 0 c313 0 419 3 419 12 0 12 -18 128 -26 166 l-4 22 -421 0 -421 0 6 -32z'></path>
        <path d='M2830 2333 c0 -9 36 -243 80 -520 44 -278 80 -507 80 -509 0 -2 72 -4 160 -4 115 0 160 3 160 12 0 12 -18 128 -26 166 -4 19 -10 22 -57 22 l-52 0 -64 408 c-35 224 -66 415 -69 425 -4 15 -18 17 -108 17 -90 0 -104 -2 -104 -17z'></path>
        <path d='M4310 2338 c0 -7 32 -244 71 -525 l72 -513 114 0 c101 0 113 2 112 18 0 9 -33 244 -72 522 l-72 505 -113 3 c-86 2 -112 0 -112 -10z'></path>
        <path d='M1948 2073 c27 -43 147 -234 266 -425 l217 -348 102 0 102 0 49 392 c27 216 51 408 54 426 l5 32 -104 0 -105 0 -33 -267 c-31 -252 -38 -292 -48 -268 -2 6 -74 127 -161 270 l-157 260 -118 3 -118 3 49 -78z'></path>
        <path d='M3710 2129 c-134 -17 -255 -108 -301 -227 -31 -79 -31 -231 -1 -314 58 -159 188 -262 364 -290 262 -40 470 113 485 355 19 305 -223 516 -547 476z m192 -248 c55 -35 88 -96 95 -180 10 -112 -49 -184 -151 -184 -118 0 -196 94 -196 234 0 103 55 159 156 159 38 0 61 -7 96 -29z'></path>
        <path d='M4830 2126 c0 -15 116 -752 126 -799 l6 -27 99 0 c91 0 99 2 99 19 0 10 -20 146 -45 301 -25 155 -45 288 -45 296 0 12 37 14 211 14 l211 0 -5 23 c-3 12 -11 59 -17 105 l-12 82 -314 0 c-262 0 -314 -2 -314 -14z'></path>
        <path d='M5570 2134 c0 -3 29 -190 65 -415 36 -225 65 -411 65 -414 0 -3 117 -5 260 -5 l260 0 0 23 c-1 12 -29 200 -63 417 l-63 395 -102 3 c-72 2 -102 -1 -102 -9 0 -14 88 -576 95 -607 5 -21 2 -22 -53 -22 l-58 0 -49 320 -50 320 -102 0 c-57 0 -103 -3 -103 -6z'></path>
        <path d='M6583 1720 l262 -420 105 0 105 0 49 392 c26 216 51 405 53 421 l6 27 -105 0 -105 0 -33 -270 c-18 -148 -36 -267 -40 -265 -3 2 -78 123 -166 269 l-159 265 -117 1 -117 0 262 -420z'></path>
        <path d='M7350 2123 c0 -16 17 -127 26 -170 4 -20 10 -23 57 -23 l53 0 28 -182 c15 -101 30 -198 33 -216 l6 -32 -52 0 c-34 0 -51 -4 -51 -12 0 -16 18 -135 25 -165 l5 -23 421 0 421 0 -6 33 c-3 17 -10 62 -17 100 l-11 67 -53 0 -52 0 -27 168 c-14 92 -29 188 -32 215 l-7 47 53 0 c52 0 52 0 47 28 -3 15 -11 62 -17 105 l-13 77 -418 0 c-385 0 -419 -1 -419 -17z m560 -200 c0 -5 14 -91 30 -193 16 -102 30 -195 30 -207 0 -22 -3 -23 -105 -23 -100 0 -105 1 -109 23 -3 12 -17 96 -31 187 -14 91 -28 177 -31 193 l-6 27 111 0 c61 0 111 -3 111 -7z'></path>
        <path d='M8410 2125 c0 -16 117 -764 125 -802 l5 -23 421 0 421 0 -6 33 c-3 17 -10 62 -17 100 l-11 67 -318 0 -317 0 -7 38 c-3 20 -6 47 -6 60 l0 22 316 0 316 0 -6 27 c-3 16 -10 61 -16 101 l-12 72 -318 0 -317 0 -7 38 c-13 79 -43 72 310 72 l317 0 -6 28 c-3 15 -11 62 -17 105 l-13 77 -418 0 c-367 0 -419 -2 -419 -15z'></path>
      </g>
    </svg>
  );
};
