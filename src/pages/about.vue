<template>
  <progressive-background
              src="http://spatz.web-y.ru/images/img2.jpg"
              placeholder="http://spatz.web-y.ru/images/img2.jpg"
              :blur="30">
    <div class="bg">
      <div class="container">
        <vheader></vheader>

        <div class="aside">
          <div class="aside__wrap">
            <div class="aside__navbar">
              <div class="aside__btn icobtn" @click="showText('case')">
                <svg viewBox="0 0 63 62">
                  <image :class="{activesvg:docState === 'case'}" class="cls-1" width="63" height="62" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA+CAYAAACcA8N6AAAACXBIWXMAAAsSAAALEgHS3X78AAAU0UlEQVRoQ+WbzY4cx3bnf+dEZGZl1wfZlMhxEzKEEWaEi5a90my8MHwX3nhwt9Qj+DWa/Rr3EcTtXV7ANrwwMIBWAzWMOxhhBMjsO6TVze6uqqzMjDhnFlH9JX6IEinD8BygUSxWZkb8T5w4cT7+Ke7O/68Sf+yC9ykiCA4cHspLPx4cOALu/JuthvySK38NFmH/iXB0X+C5cm92G/zJx85e5xxfOPvPnaNHzgG/uDLeO3gB4fBQ2N+/Bst9haXSWqBbBOj16oZm6kyS0ydnEzMsDWYGzw3uW1HGkXNw4M77VcR7AX+1wl88UT67L9zrAumuct4HIFLngBNxiYShgqqAj9lJtZPNIRniiVEyi3nivDcgsWgy8YVx0ma+fu58+cjel0W8M3gB4Ysnyl9/ohxfFLDNqsI14hoJocIlkrRCpQKr8awEd1DDtp/BnZEEnpg0iTxkch4RS4gl+unI2fPMrz5J7H5jHB05jw/8XZTws8GLIDw+FPgrBSLteUWe1niqUW9gEtFU4aHGx4hqhWuNeIMRwAyNmWSGqEECdEBImGSCZCQPWBxhkzDpkTgwDCOLuyPTOvH7b4wvH9nP3Q4/C7yA8OSJckRgeqci7dT0XUujE7RqSKnFiWgugFUE8wCuqAiY4fRoGDH38rtUSBZMijPU4Pg4YmFESIhviNIzsCFpT3ve0+4PnHyX4R+Mx4/dfyKYnwReRITHj69Xm65mGiYk20GaKW47ZG8QbyCCumPuBB+xlAl1xtzLytqISYZgkHVrJUrOFbGKZG+KUrKgwREbSDogaU0VO8ZqzU7u8Kbnn/9n4uFx/qkKeOtz/gr4073Ar5pIfzIhtzuMPkV0itkMoUFEUHHcejwPEEfQnhASQzIIRtSM9AmfZVhDVMFDJFogaCR5BTLBU4WEGpUakwnBJ3hoGNhBh4beKyyvePh5xx7wmCwivK0C3gr8FfC93wSgYvOiRZspUeaYzHAmZbUzCD0qPUnWSNhgacTjgHiirTLaGNIbwyIzjg4NxHNhswgsGuX8ItJaZPCGECrUGzI7WG6oQoNJi/gE9RpCRR4DswvhfOjY+83wUxTwo+BvAT//vmZWt3R5jlYLzBaItNj2sMu+QeKSnNYEXZOlJ+4MqCS6Sab9xokz42TpPD11Hn5aJvi//yg8/C/C+TOFQWE3EL0jriusronjhjG0ZKaINgRvyHmKu6K14ApSw/n3/BQF/Cj4K1OHilnd4jpH6zskWyDeIgiqG1Q2WL1EWWKhA9/w4d2R/lmmeWD852+Mo0cOh1ehLFwGelt/fbhfIsHTPaV/ppw8CExOK/Kkx31DYwObcUYQUJkUKxiFJEKsiwKOcZ7uwePHmR85Bd7o8Eq09veBRVOxWe+Q8wKt7xBsQZYWNQHfQLjAxxUhL+l0zVR6Vh+N8Mzg18bBjUm8Kq6/lIODG9ch7CMcPQnQRiaTipx30Ga6tbg5Yi0Abh2xOqMfzgjhnMnOmvN+5ODX+U3H4GvBi4jw6EvlL2eR3Lb0aQFhl+R3EGtREVw73C/Q8ZzQLLHUsYk9kG6Bvgx3f3+qPNwV+AzufXuthJOPHb6Gp6fOX+/aZTh7695/nEV+1VachRYZ5uB38LBArMXUce+Icgb5lCaeE7qOf1wmnnxhrzP/14M/PFT2fhN4sZlQ24xu2EX9HpnpbeD+Aq8vuJM7nj8Y2P868+iRISUG5RDh6W8DDz8N3CdykQJNFDbxGvxlbD+Pmecknv4h8/BvMwe4g5eACmHvq+J3xryD1D9QgDuBFSYntPUpgy65O9lw/LvsBwf2KozXCcYNEZGi7dUQCWPDZj3FZEaWlhAA31wDHy6oujVx3sN+4osbEdfhobD328DDhxUwYcUMGef0aUEerv/6tEDGOStmwISHDyv2fhsut4g7zmNxjn+XWXwwUIU1PlyAnOF+Ab4hBMjSYjJjs54SxobVENnfFxF55VZ75crL4aHCfoTZhEUzZ7B7JNtFtEXpyb4kVC+Iwzmreg3PB/bJVw4N4Ot9KfH+cQXVhNZ2yO2MikjuA9Q3RhwgNJmRROiK32DcsLc38vtvjM+OtpM8oKTGBLhfMx12SPWCPN4lyAyjKftfT6n1hPP+ApYbOEqvWv2XwIuI8OWXyncf1Vg/pRt3CfEeboti7n5B8BfUzQvCcsVJO/B953zwsfP9t8J/3T7opBWmQ2AME9SnwB3M7xFiJNnLFhfVyCmhcgKcYbKiyhtWdeZeVyb5v+BqnA9a4V5Xk2dThv4uWe4iMsfcET0npxPa6hRtVnz03cAXL+/9lyfhDqefKOcvKjbWUMkErCyTsMFZlb91Tx8yLJWPFjWTpy2ftC0r22E132HR7wBT1MuWEaZ42MG9RgkA2HZ7KAH3Gg87COX6orApi748b2U7fNK2TJ62fLSoYan0IePr/mpOwqaAsJpKJmys4fxFxeknyiss/GXwXzxR6otAXVfUTEjaIpTozaSnqroSvNxN2EZppEHG6fVelgWymbOu5nicM+Q5lmYkL7G/aINrDV6XFNfrku1pg9sOyadYmjHkcv+6miObOVmufYOMUxppsI0S7ybydl4mPUAJs7WlZsIs16y+iXzx5CWst4KcEs39nfCvQyDWVUlPQwUOEjZoXuPSoc3AyQnQVMSqxYc53pa9XAfI4ohD9kCs6wKaFpWalB3FETXcHVEBUxJCUMG9BTWiCjnXiGSyQAzCkCG0GRkS1l7Qjx3dSaKZD3jq0LzGpAYa3GqyNHhVcXcW+AwRkJvn/m1tuAPPlawRSzUeavLYYOaQB9Q36DAwrXIpRemEyhZo/SFqDwjxAVkegN1H84douIfYLqLzYs7WojID2cXtQ/D75VN2UZlh1iJMy/W2i4Z7aP4Q7D5ZyvPVHqD1h1S2AJ1Ar0yrjA5lfuQBgOwNLhO0aThfVdzrwg8DrNvgDw8F7it1DoQ6oB4gQpAe1TWDb4j1wElnNJUwkViKFXkCxJKriyEx4WEk21CORevIeY3KCpEyOaGUtmS7/0UGVFbkvMathMfZBjyMSEwgVp5PxPMEDzUTiTSVcNIZsR7wqkN1jdNDhEgkjaWqlO4q+/tvAL+/L7BUskS8jwzbbWE2ImFAwkBNYm9uNFEYLZBShWmDSIXnCK5Ivi5IiBpcVmsA9xpsjnMX5R7O3fLdt071xvUaiolKFnDFc0SkjJdSxWglYNqbG2ckdBjKvs8D6k7OFbWUctp5Hzi6f+vMvwIvIqXaen+mDB5wiUBE3fE4FgWQeL40jo9hsxaIinrAcyylKd1Wai4lQUrlGAtqINuzVhVcMS2g0O08pFwX1Uip3H81UxFQxSjjFatUNmthNTiLJrPyVOp+kwFzJ0uF16VwOkmBvbnc9PrXK3+53y9SAX5ZhhI1ak+IJ4aLDDNj8YHDohQhCIqGQKAoy6QUKiVXZKmu/p8UMQ+4lyKnExGv8O3v7qGUulL5Hojk7XNUKkyqq//XECBoGX8Bu70TXxhtP1JLj489wobgTh6FqEIThd1v5Oa+v/b2JYGAf1kKzARqsORUMrDxEc0j9+8mnj8wdp8px+eQJk6sE0aP+YgzIrJBpMdCKoMHAQ94mKB0oCNulKPNA6IZ9x7Rf0XsDAsrxDdYyFf3B4kIDc4E8wqXCiWROids4Ntd2HtgNMeZc0+IjQyMECpidFISfCX88Xaz5HY+/8eZsDEhq1z9Yj4S40i0TFwae3PnW2Cx42QxBslgA4ENsMFyR/YN6gmi4SJAgNCBDzAaBCnVHwk4uQQn4ylUZyAryAMuGdzRceuDZIKGRPDJVR1wEoyw48w656s/wF98aow5U+VErEaSGAy8JoV5UzFjAGJpJIQhM4ZMPTP+6Sv4sz91TpbQzJ0gmd4TGjeIrdFxRVt1rM8T1EaKQhqVnVlk8I5K1xgXJWpURcwQHVBdMvqaWnrWXYLKCMnxQdlZRLoxIZWTFVKKNJJJ5qwu4N4MHn7qfPt/gD2nrgxycZg5OjG9srr/avDRyk3qDsFIvTNx59tQBqGDZsfJtROzIZIQK+fsWHXo0DFJI3FiTA1Sp+RaSfWGJnW4rkAjQYSsjnhCbUOKA80wsuiMGAwUUlJ0qLAaKg+YRYQE2ci10+xcw7r3n5xVcjYVSHTyCHV8dc7O25Sx3iTRinLACJJJfUa6REoj50cjYHAAXz8RPquF77tUgpCw4U6rbKIwSc5ZZ5AT3+cMbeZrnM/+5jJDVBb7ILEit5k4yaBlzJhvr+jJ/xXYE2ZASoJEyHIZSbwkrwafVIhJSFHQXLzqJggfA//0B+Hen96+Xt3JOBINaiNODLDrNPLRZYfH2N9P/P50hN3ifHpuV3ButaAOkMNDiDMr2yMa2bcW+YMU/ekfhL/4FI6z4EmhUky2OPSVCnjDytdA0tJnqwPVEBg65fPPM/2z19/2GimADkpVxilKOTyUq3KVbK85eNNT3iCffw7DsVLVgVQH8AimWxyvvOW2G/yTpTMZvZjz5RVSkVLF4IE0U45b4aT9gdrfXtxLacrB/eDArv79Dg1HTlrhuBXSNkBLadsU3Uq0gutPlrfGuAZ/cOAcAf3MSeYwgGYhe8NEKkKoeP4iwjPlY/59yccAz5TnL0pXeCJVaXdlgQGSOf2s4LtRIb42exF4/HfGnMyLPiGk0iS0hkEiSqSeB4a5cjo4rK4HNxGCCCkpPigpKaByeMh7ECUtFY9aorooDD/Y8KeNQC1XPIBBisl76AlWotN5zGzuXxdWuQHe3V2ePHGOWmNaZ9xLcG0yIaQKrSqSRdp/CeSJ0UchDkKzIyhC9pIJjlXkfKhY7BdH9a6Slsr5rKKqI1EC2QMqQkDoh+KU44XSbpQ0jQSt8LEiR6F0dxO1ZJ4vjf3uViPztsM7OnL4KyP0iTxJ1CnRQ+mt5xq3GgsDTBP1M8HuQFaBpIhWJGvQMVPVsIkVYu8O3qNS1REdW1LVELQCU3IUmEB9JtgDxcZY5ug1qhUZqElIkwhdgplx9NWtPX+rgCkgHD6pmOy2wB0Iu4zjB6gI4kuinDDqOWPoYRmJO1NiXDAOHxCkJ0pPuuqjp1uO8+dKUqEmkrwhyoTkDdkbqvp7UjonrVcwS1S5obIFye/hMsPcqarvIZ8CZ2xOOw4ejX6jknN75S/3fRgSXg94GghVj1iLUzPSErxHOoMAag55m3tbINFgpphViGSo3h28jIXYYFoVaosHTEv4Gs3RINBVaNUwaotQowiiGyQPSByQIcHt/Q4/AO/uLl88cf77/cxxHok6YD4SaHEmxDBCGhkw8LKyGjN4Ao0ggShVqea4k/zdwZc8XohagpYy+0JdMXOSB5BIy5QYdkh5UiIJL/NPeWSvzvyP5y8RF16u24Pw268ix89aYjNHdBfJu4i0uPTIuCTFF9S5QypjGCqUKVoFyOXozNEL4eg9SRYhpK2HD4aNGWNFXY/4qAyhJaa7eDVDvMG9w8Mpbqek/oK9Bx1/+3m6afLwqghPBL780lh9NGJ9z8imkA18gtIg0VEfsSoT2NDQF3qJKI6SBiG+Q8DyKglQnls7IkYQo/KEo1hVo3mKxCl4g7kTpcfYUGmP3h3Z/caQ/3bL5OEV4N3d5fDQ2fsk8cJ6dL3GY+HZmO0ALSIjnhNDzmjeMNEN/cqLj5zc0O/ZDx//M+RO+QgT8DPwHvoozBqlHxp02+jI23a1SIfLCh3X5J2eeZ04OnrJ5OEVZl/ul9Ke/ux+RRNbWN6BuIuHBdlKv05Z4pzh9QUqG/o0smgy571ftZfep5y0wuK5kO8osa5Y9y0S54SwIOU5RkPQDsnnkE5hdkafOr5+Pr6uTf3KxMbdXcA4/PtEXA+wWLPpGwI1UZpiXoCbU2+cagITnLPvDT7JnDwzvn7ufPZoO+DPifQOysfXT4TP7gt7c+GYAF2gyg3KFPIc8xkqDSqGsyGFNZOdNSwH+joVnt6r/c9rszoHF/7BWO2PkDfEZolKBKtw3SlEQ3EGh9QFQg5QrZl+V1gZj55njg4pKerBT7YEuSQ5PtqHo+fK8XLLztAdNEwJsqC3OVFKWUvoUFlivmR1toHlCEfm/Pq1Y7+6uHUpjw+cfTK0A6FbQ75gyBe4d6UMLRNCNSPUd0ntXZpmwRBmTJ62HLUN7Ee+ROXwUOWlBPzVIiByeKh8SWmTf/dRDbMJdZiS6gVNc4c83iXb4gq4W4fqOeSLMs+2tMwfv1npP0pCLFHflpcDLf3ZglHuUIc57jtYlFLMSIWJJWmNsULbDdoPbHZH7m1JSbufG0+eULbDza1wUMz70SM4/eo2GcnGmkDDEFtUt+2s0GyPtO24co5WL/B88bZ8HHgL8EAhKzzdKwyLRTVhCDMIc2zLpBBvAHDpCblw8CrrSvtoGEg7IyqJ7rTU/YFbTvGqPrBU2t2AebyioQ1jSyUTzHbQWMrXwJbZ2TGECyo5o2cJ8zVPvxp5ePxaKspNeTvwt9iXf37NvlSfIj7Ft0REla0VsAEdtl3THgkDOg6oJ8aQGZLTTL0chXegXwl1FKocMIlYVeO5EJjNdiDUCA223TrCBpMe9SXqS0xWDHc79hg5/t1b01DfCjzcUMDreLfi08K7pViBqpNtIEiP2YhLT7YRPCHRbiU9Sbd1NykpqXhTMjMvvXy1AtopfTivV1T2zvzbt67ebh/oAs6TJ84RBncyzEakGzDr8aaYZ7Qa88sUuAIM6ImxUMqHbNuqbxHLSl0pTsSt9NcNxa3weLP3oAOiazRsMOtYa0972hO2zOuHxz+Zef3WK39Tro6hK659VRXWljWFzbHtjTuRyLZ/537VtLRQKrCJon4TQbOQTIlx+91HEokf0s0n2rPshvfBuf9Z4C9F4Poti9UQOX9RUV8yOrYvHKRUUd2wsBy9sK9upLt5FKi5Tl6AkUS88aLBOI4QCujz73Jhf73b2xbvBB5uWMH+vnD6ifLP30Tu3A+3XjVxiUQt9XM2EOuXB01DqcxEKwVU8fRLvmIC7wH8pcibXjKapMAmCs1KrhIV4Mrb3/zeb9+22sT8S75cBO8R/E0pgdHh9etle/NSV7/Jt32dvPSO3S/zWhn8QuBvypVFvIlt/UP5N3q78hcH/+9Z3pzY/AeX/wfpa49gHJgBOwAAAABJRU5ErkJggg=="/>
                  <circle :class="{activesvg:docState === 'case'}" class="cls-2" cx="31.54" cy="30.86" r="24" transform="translate(-12.58 31.34) rotate(-45)"/>
                  <line :class="{activesvg:docState === 'case'}" class="cls-2" x1="17.65" y1="26.4" x2="45.43" y2="26.4"/>
                  <polyline :class="{activesvg:docState === 'case'}" class="cls-2" points="27.84 21.09 27.84 18.99 35.24 18.99 35.24 22.24"/>
                  <rect :class="{activesvg:docState === 'case'}" class="cls-2" x="17.58" y="22.19" width="27.93" height="19.12"/>
                  <rect :class="{activesvg:docState === 'case'}" class="cls-2" x="29.94" y="24.94" width="3.2" height="3.2"/>
                </svg>
              </div>
              <div class="aside__btn icobtn" @click="showText('radar')">
                <svg viewBox="0 0 63 63" :class="{activesvg:docState === 'radar'}">
                  <image :class="{activesvg:docState === 'radar'}" class="cls-1" width="63" height="63" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA/CAYAAABXXxDfAAAACXBIWXMAAAsSAAALEgHS3X78AAAJk0lEQVRoQ+Wa23bbyBFFN0lRoi6eTJL//8CsZBKPZVOiKBF5aGz1QQMESVvOg1Nr9eIN6K5TderSTSy6ruP/VZanLviV5erUBR8ki+Z1Trrm9afJzwS/mBnHpJsZHy4fDT4BLmOs+nEu+Ld+HGJ8uCE+CnwCXvWvVxMjwSeI/K4DXifGgWKQrn/fznGx/Cj4FvQVsI5xHd/lWhnXU/ngFdj3ry/x3tdkxXcb4EfAJ2jBboAbCmg/6/U1VdGkcRrQeQX5Cjz3n/fAjmIMh0b4rnBYfEedT2WvKEA3/bgDbqlev+7vUTmVl8aCz7luYg2oQF+Bp36Op3gvEy42wKXgVUqKC/i+f32gKg8F4I6h5/SqcQsV/Lq/fx3vXbOjGGEHfO3HN4oR9nyHAS6hfQJfUzx8D3yigN5QPa2SewptjVs9mIq2BjVkDBvZcNu/v+/f31CT6BM1DOBMA5wLPhW8piz+CfitH7dU7zxTvCItjVlj2DiFYcLLpCkLDKf7/rc7qjGu+nvaEDnbAOeAPwb8LwyBP/fjGwX8M2OaO2C61GVfsI77rijAl9RQWFN7h5SzDXAu+KT6J+B3CvANFfgjFfiWIcXPaVIW/XW+dpR1/U4dNhQjbJgGD2ca4BT4zMRTHodC70fgC0O626VlTVemFG7FdaW9Yfap/13jtHOlgXP9kcyBT+AqYIxv+mueKKD/pBggE09mc+fLkTvKbFaWVA8/UIz9VyrbHqigjHkYMmtqjOQUeOP8jmp5Y7wFLtVba6vgsV6/YxgaxvUDBbDAP1HWvo01BP4W48A43CY7wWPgVVYP3FOUyeT2yDzwFmj2+La7S6qyJrdVv+ZvwN8owO+pneMNFdCBklBXVIO9UhNttsEjmQOfCeaOcXL7wjRwDSdrrNv5KgjBq6zgzS9/719tk900EWtABWluemDYXxyoCfBdpsC3sZ6dW8ewnGWMC1wv25jYkGwY1u7b/to3hknSdR8onrfRWffz7/u19hQ9vvRjR60MrpctsCH2LsfA63UBCHzHaeBt93dPBavn3QBNeV5WPFA8bxdHv47efAY+A39Qwu+VYYvsGjZZo7if83xSdEFZ1J56S/VUC9zkaEm8p8a417718+mN9FiWNcG7u3PdLcXbf/TjsZ/H+zVC5pZReW3BJ+UzTqHupoylLGcZJjZBv1O8Z7+vWHqkoqLB0wC2tXaPOwrQz8C/KcD/Q9FrSTH8impw9deAA+/PgZd+19QY2zHcRnqPyc1eQK9Lbb2rmKiy5ut5D0C8RmPtKR7/DPwT+BcF+Nf+Nz1821+f+qf3zwKvxaBuUIyftqTpdcGbII3Xtibb+nbUDG2esLKsqEnskeLlf1BAC/yRopO5Yt1/Nt6vYoyon+D1QluToR4otHvxqZJoTV7G73rvjbq1NWubV2xuLGtv1MMPS+sXiuezo9xTxLzk3ILXiTZV796f8nyCX1MbiQSu16fCZE2luZT3LE6vy55jHd9Lf/+W4smn/v2W4SmO89DP4zmf2V3gCf5dpjyfA2qcS9UWvJ43wSyoXZvvVch7BLymMMVhftFAntYYcmk4Ozd1cU0PUnZUfdpx1PN5gYlGr2e/3IZJgs8El+2lRvK9YZJNVG6Ht/HZcnhM7OLS+7KwdSgwBt+KXmtPYGCaJVAU7aiUzsqgMg6NZ8vq+dyOGi6ybcGQwpnA0vtpgNR3JMfAp4Itvd5LBdPgzeJLaoxn/AtEMGtqWbOcPVHDI2PanOI9uW7qlzo7RjLn+Rbs0UlCku6+lzEq2ipsBVgxzNY2PQlAb0/SmKGOU84ayBz4VtmpxVrxGik9J7JiS+3L7SME6jhnPhjqOGXsgRwDn5ZVgVOT+b113Yx+RaU98XqghsRLf+2WYpQFtUxZblOm6Jz6pc5HnXYq4Um9TDIpXTMW/bVpiDU1bg8MY9Xy1FGTlPc5T/YKbblrKZ0GXzPWdyAt+BaIHmgNkMkkkyHUbg2qAmZ8Y1wDmJj8zd4g2eE61vCsPq7rPQl8zTAMW6YMwLde9MIbjm8QBGPLumN8pJxtpaXLUkb/fXZ4ZnSNbBgJvm22OirNs9O8id+ncE3S2DopDaW+3s/4nwJv26qBoHrEkibds2XWCNJdRpgYv1H380n7zE3p9WXM3zIFGIJPT77GgOFZnAbwHsF7vJUdWdZblWsTUdK1ndv527ME84TSAreLTAML/v2+qZhvvQJ1t7VhvK099J9VcEulvnPqoRXFiCuGnstrX6khYJL7yviwNI0q+Dy+gqET29w0C14av1APH40lFchM7fleHn25tc25p2ibXlPBjnpS/JnhnyKWvmROsnPB/IYMOO15s6vWvKUeJzmh44WiXMZ2R1Woa4b3LakVwDiXTQL/k2LYXfwOQzbdxFgw1P8s8DCkstlVEA/UHVNSL2PTZGiiuqOerc3VXedRWY+l8+BCEDAE7imQBynqfxQ4HAdvEjOOd9TjpXvGSSS95RyGzpa6VzcWYWwM2SZdv1H/+W2fvkjg6iRwKZ9/kU81RLOeN9lsKQlnRU169wzBZxLaU+m7pyZBYzJFIPlZth177iaB53+IngmYV9rKcBZ4GHpfAxhPm7hGCsI4C2fifGa6T0jJcPO+ds6W6v4/4F9aB4rBZEveP5I58Cpi/V5Trb1h2ppzBrCLOwX+LYZJEcbA84jc42qrQ/6jNAkc5jc2et+4ze7Lo+ZWFowNkEbI5qaVrhmp9BTV24cknqknvG1lGFEeToPP2LeeqnwaIOvt1JMZufgUcKVVsq3j/iM09XTIscowCRzmwcPQAB4tEa/+AalBbFFX1GQzxYJjksywc2vLmY+mzAE/muFTToGHSn8oE+f3HUUJk2D21llq2obI+xWNuYyhIS2RljOf+TPGBf6F8T/HHwIeavy3v2kAt712dNLfvYA9dmbfjiHw3ODYTq+p5dWKc2AIvH0e6CRwOA88jA3g5G8UQPkEpo3GNbVa2GZmKDiHNBe4xhO0VUZ2vVGzuk+HXAwczgcPQwP4OZuZfIJD5Q8UpW012zBQckua92tIqM2L3d8PP3t76YPHMExIesrO75d+6joly1DS1Nj3c8awi2X2T2M6b+YIc4bMeYnRVpKL5EfAw1BxYzYz/nV8lyHWxWtbPqFucuwO98132f19N4AfBa+0RshSlSPpnAvndx3V6znML+aado6L5aPAK1NNigbJ7vCYCL7t7ZPaH6bwR4NPWcyMY9LNjA+XS0rdpZJKT8X1Mema158mPxN8yv8M0CUyd6b2y8t/AQ4BDSSpJdwHAAAAAElFTkSuQmCC"/>
                  <path :class="{activesvg:docState === 'radar'}" class="cls-2" d="M55.54,31.5a24,24,0,1,0-24,24A24,24,0,0,0,55.54,31.5Z"/>
                  <path :class="{activesvg:docState === 'radar'}" class="cls-2" d="M43.09,31.8A11.82,11.82,0,1,0,31.27,43.62,11.82,11.82,0,0,0,43.09,31.8Z"/>
                  <path :class="{activesvg:docState === 'radar'}" class="cls-2" d="M39.3,31.8a8,8,0,1,0-8,8A8,8,0,0,0,39.3,31.8Z"/>
                  <path :class="{activesvg:docState === 'radar'}" class="cls-2" d="M35.06,31.8a3.79,3.79,0,1,0-3.79,3.79A3.79,3.79,0,0,0,35.06,31.8Z"/>
                  <line :class="{activesvg:docState === 'radar'}" class="cls-2" x1="31" y1="32.07" x2="46.7" y2="16.37"/>
                  <polyline :class="{activesvg:docState === 'radar'}" class="cls-2" points="44.98 18 44.26 14.3 39.53 19.03 40.28 22.77"/>
                  <polyline :class="{activesvg:docState === 'radar'}" class="cls-2" points="44.99 18.17 48.69 18.89 43.95 23.63 40.22 22.87"/>
                </svg>
              </div>
              <div class="aside__btn icobtn" @click="showText('settings')">
                <svg viewBox="0 0 63 62">
                    <image :class="{activesvg:docState === 'settings'}" class="cls-1" width="63" height="62" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA+CAYAAACcA8N6AAAACXBIWXMAAAsSAAALEgHS3X78AAAKOUlEQVRoQ+Waa1PryhFFl8FwgAPn3tTNzf//d6lK1c15AgaMlQ+jRW8N8oNXPiRdpZItj0a9u3c/ZuTFMAz8v8rRvgH/y7LcN+AdZNGdD5GhO3+IfBT4xY5jnww7jneV9wQvsKPx8/H4+Xg8Xgr+cTw243kYPzvmzfIe4NOrR7Q5j4GT8bNHgp9TPn8bgHUcDzQDrGkGeBc2vBW8gAV9Mh6nwKe4ls+Zi+e5vCDoNXA3fr6nDCEbXm2E14LvPX1CA/sJOIvzMn5XwfTc3Hx+F/gaWNEM4Pk+ft/EnC+SxSvqvEpK7VPgHLigAb4Yr52OY41VlU6FlWSPrDF3DON998ANzQC343zOaW54EQteAr739ikF9vN46H0opaWs54zbnLtnkWeNCAX2mmaAG8oQa6ahsFcOpb3Aj2n39KAvx2t6akV5SoX1+pyC/fwy5xPFJEPpbPx+QRlJY0CbHw4wwEvAS/MzGtgrCrTelop65JZpfEpPmE94hpMMOKUZUmNrgHPKCCdUiNyM82jgnXII+KTkGfAF+I0G/oKpt3/RFLimvG92zjjfVeqMf419RwO9ooHO8LqggMM0+++l/z7wPfBLGvAvNEWOaEoJ/BfN2yum3j5ImVE2tOea6c0bZvt7mh5QLIBKrJn4dlaBQ8AfUzF2NR4J/FccxvhcbGcN32UE75FR1nQNoVFkkQYYqOcelP13gdfrGeeXFNVWwE/gO+XxLDswpSRMvTHEtTnZZoRscBQNcMm0I9xpgG3g+5J2QdXxBc27v2jAf9I8/kCBXsb9ZnLG3zPxHZKZ0wg+I685t8nwgiqruSZ49ox94E+oJGNmH2he/kWVmPV4n61sNkDZrGyoJNgnw50Ujd8eafdmafRZZ9QzdpVWYB681lxSGfUzBbxPbutxfNbirNPOpwJ9OdRLh6zYegPcUi204M9o+vYdpTo8yTbP6/Xs1ZPuCdyxsuOSKkXW/4x7q8HP8ch8cUiPnga4Y9oYLXi+xkgDTGQOfNbYbC70mh67H6+d0gD/DfidVg1OxjmgQB1Riq2p7ixD4oEZD82I413x2er2naGGVgdzDPAcvBTNmD0Zf1tRDcwdbaJj2oOugL8Df9AeekxR84FKTvYLGm1JgZjr+VP662mwFU0v9dWwfj+mwvNpnm2e7/vrgYoxG5iB582PwKFouaI92J2ds/F8SjNartLWFKjM5OaLPi8MtOdogFtaglZvMSyp5Pokc56X9h5QdJdCjzHOB7lmF8Q9U8ptxu8aTXZZTWTTEcWUI5pYEZIdaYB83g3l9cSRVQfYDn4ZB1RpMnmoXL9r41hb24Hp/p2eUnlLo03KhkqSGmiIOecWSRn/6vhAedyjb7gm4FUwV1ZLpg/PrJmJ0byQ3ZX3C8Z7oAxgibyigOd1c0JfHmVUMsEWWF1lmEYU/JP3e8/3wE+YJqRsXR0nrWw79bgGyUQlCwS4pFHeOH2kHGAobajlseXxB7VyFKjZPJOnzEoDPMV973nPmWikUVI5xzpOj9vtKROqjZJ0PaZaZ5mk509oc5oQf9Baamt6Ut7YV9e7cRxMMW31/ILpQKjJMsb2id7LpDXEZ8dYKi8pwJYlNykMoUtqr9DrGWbpfXXuwW+N+TnRqlJa8FpPQywoZb2W1QKK0ibBJbUjc840wabxMlubYNc02psDbI+NfQ1jiM7KNvBDHHOlxdKVhlFJxwrAa8TY/F2QGg/KEL2RZco5lSfM5Knnpvs+y9Z9nt8mGWtSDCo7+2CTz0C1w1DJTsA5XsPobUXmZELW4H2emjs/k23gM0ayRCjSy9pqY5Plca5KqLjrBmMcygiOE7g6DJSXXSPYuva5ZO78TPZ53oYn404RnOAfaFT8NI5bU12bc2U36EoxabmMcz4LpgZ9ZGrUZFQfTs8SndKDn4sRm5hsFFTEntpdnSUtG1uuBOG9/Xbz/fgM+4Q0st72eVAGSSNkEs6wyBwyKwk+YyQtqadsGJKea1q2/TH+tqZ1a9J5QTUhUBn4nmk2dwdG4BpDYBumz+y3xZ0/geuAZNck/nvPb5h2SQ9U3y79Vdqx97Syw/j5htpIyM0Mlc8wcGFjqBgKMG1hs4m5pvYOLXNDzJebGcOWA3juea2cBjhj6nmbECjqe5/gczmccScbBK2y53FAGVVP38X5O/CVFmoul02Get0OMI2XDAHmYz6ztCCdMNfGScmHOK+YKiFTjuL6FW39/xvw53j+nWZoS6dbXdc0oDLsJ/AXzQgrqgQuma7jDbke/KznYep5D6htId/OuKZ3vHFla2ncLingNiiXNAMI/E/qhSfUltS/gX8B32iAc7vKFyT2DgK3/XV1aOiaa3Z6HqYlzDJmN2UsW8L6WDK2F9SDpbwV45im4B/AP2jbXzJKmrpR+pXycr6uyh1fGWWc2887vt/Df5JtpU4PmlHtwfW+MSjlnDTPGgKmJdLsLvW/0PTwma7IpPh3mvfdipaRGjlbXleHA1MjPaM8zNdBaW/cuZyEeohJUFqboVN6Vvhga7hlM/OGCq/ifMtUDw0ADbjdolUDKkT6TY+JzNEeSpmkWr4QyDjK8jWxbIjX07DGr1n6gYrnfPGZAHyOeeSU5u1Lpi9W7plS/hlwmAef1O/rttbtDZDe2GWAR4rSX6n3ajZINzSKm+TmXn5KdXNQ/iVmQW1imhBnKQ/bPZ9xL4UELrX0urLPALJJ4P8cx32hdmyuaRn+r3HMNdN5E7ivzL9Qb4k2TENkNtEpu8APVOb1hcApU3ql2FTopfw94/qGBm6gUfszDTw0pb/R2uVv1NtfE2hS3YR5RemTL1BNyrNeh+3goRS+p01ql3fEtBuDquP58kED+GDZtBq/P9LAfaI6P8MsX4llVrczzErhHxPc4Dz43d8h4DNOVRLKAGb77P8z0aQC9hC349lu0FJob5B0tTc4od4Yf6H+IcI4zw9qV9c+5NXgoQygwn1Js+xBlb4l09daqUQmU8Mg298cZ2Nk92Zy802wVBd4LnZmO7pe9oGHUhbaxHl9oBLhaRxS17qcvbVJMg1hAyS97QOybfW1lklXqvfAdya5lEPBQ5W+VHrN9L94ZzQAGkHvpwGyN3BuQXvYrrrqs1+3nG2oGP/B87KYuWarHAIepgbwezYs0lEGmBzPqXLZN0V902K+WFJdW64mZYfNi42Qf43Z2sZuk0PBw9QA6X09e8/UQxphoBTz3se4tqE2IjzreZPpQIWQlSD/1jK7ZN0nLwEPNblHet+SaCeoB/VcvwtkRTDWc9vJZ7mwsjJk3599fl9WD5KX/Ou6FxXNTYrcwclr+dm6ruGyU8zcYI4R/F1879cWrwLxFvCKBsgNjCx7J3HO3R2Zk+d1HDLK74ZJ30C9GsB7gIeiau7IpjE8awSX0n0ICXrdfc/qkKXyTfJe4FMW3XHElBkaRkkDZBgkpd/s5Tn5CPApizinMfpOsQeYQD9MwY8G38uiO6d8ONheXlrq3ir/dYC75D+jxmr8RO2DCgAAAABJRU5ErkJggg=="/>
                        <circle :class="{activesvg:docState === 'settings'}" class="cls-2" cx="31.54" cy="31.13" r="24" transform="translate(-12.78 31.42) rotate(-45)"/>
                        <path :class="{activesvg:docState === 'settings'}" class="cls-2" d="M32.38,32.62l-1.25-1.25a6.85,6.85,0,0,0,.63-1.53h1.78V26.28H31.76a6.58,6.58,0,0,0-.63-1.52l1.25-1.26L29.87,21l-1.26,1.25a6.58,6.58,0,0,0-1.52-.63V19.84H23.53v1.77a6.85,6.85,0,0,0-1.53.63L20.75,21,18.23,23.5l1.26,1.26a6.17,6.17,0,0,0-.63,1.52H17.08v3.56h1.78a6.41,6.41,0,0,0,.63,1.53l-1.26,1.25,2.52,2.52L22,33.88a6.87,6.87,0,0,0,1.53.64v1.77h3.56V34.52a6.61,6.61,0,0,0,1.52-.64l1.26,1.26Zm-7.07-1.51a3,3,0,1,1,3.05-3.05A3,3,0,0,1,25.31,31.11Z"/>
                        <path :class="{activesvg:docState === 'settings'}" class="cls-2" d="M45.58,35.12,46,32.63l-1.24-.21a4.93,4.93,0,0,0-.26-1.15l1-.73-1.46-2.06-1,.73a4.88,4.88,0,0,0-1-.63l.21-1.24-2.5-.42-.21,1.24a4.31,4.31,0,0,0-1.14.27l-.74-1L35.6,28.87l.73,1a5.39,5.39,0,0,0-.62,1l-1.25-.21L34,33.17l1.25.21a4.93,4.93,0,0,0,.26,1.15l-1,.73L36,37.32l1-.73a4.23,4.23,0,0,0,1,.62l-.21,1.25,2.5.42.21-1.24a4.51,4.51,0,0,0,1.14-.27l.73,1,2.06-1.47-.73-1a4.69,4.69,0,0,0,.63-1Zm-3.42-1.86a2.17,2.17,0,1,1-1.78-2.5A2.17,2.17,0,0,1,42.16,33.26Z"/>
                        <path :class="{activesvg:docState === 'settings'}" class="cls-2" d="M38,42.23l-.38-1.57-.78.19a3.19,3.19,0,0,0-.44-.6l.41-.69-1.38-.83-.42.68a3.68,3.68,0,0,0-.73-.11l-.2-.78-1.56.39.19.78a2.58,2.58,0,0,0-.6.44l-.69-.42-.84,1.38.69.42a3.09,3.09,0,0,0-.12.74l-.78.19L30.78,44l.78-.19a3.55,3.55,0,0,0,.44.6l-.42.69,1.39.83.41-.68a3.15,3.15,0,0,0,.74.11l.19.78,1.57-.39L35.69,45a2.9,2.9,0,0,0,.6-.44L37,45l.84-1.38-.69-.42a2.65,2.65,0,0,0,.11-.74Z"/>
                        <path :class="{activesvg:docState === 'settings'}" class="cls-2" d="M35.39,43.05A1.38,1.38,0,1,1,33,41.62a1.38,1.38,0,1,1,2.36,1.43Z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="page-content">


          <!-- Title -->
          <div class="page-title">
            <div class="page-title__wrap">
              <h1 class="title">{{pageText.title}} {{ pageText.seoKeywords}}</h1>
            </div>
          </div>


          <!-- Content -->
          <div class="content">
            <div class="content__wrap">
              <div class="content__row">
                <h4 class="content__title">spatz</h4>
              </div>
              <div class="content__row">
                <div class="content__left textblock">
                  <transition-group name="textslide">
                    <div class="content__textblock  content--transition" v-if="docState === 'case'" key="case">
                      <div class="description description__text" v-html="pageText.text"></div>
                      <p class="description description__text"> 111111111111111Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsam accusantium pariatur commodi eaque consectetur earum omnis. Sit, sint autem! Quod, mollitia numquam vero unde dolorum modi sapiente odit incidunt.</p>
                    </div>
                    <div class="content__textblock  content--transition" v-if="docState === 'radar'" key="radar">
                      <div class="description description__text" v-html="pageText.text"></div>
                      <p class="description description__text"> 2222222222222222Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsam accusantium pariatur commodi eaque consectetur earum omnis. Sit, sint autem! Quod, mollitia numquam vero unde dolorum modi sapiente odit incidunt.</p>
                    </div>
                    <div class="content__textblock  content--transition" v-if="docState === 'settings'" key="settings">
                      <div class="description description__text" v-html="pageText.text"></div>
                      <p class="description description__text"> 333333333333333Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsam accusantium pariatur commodi eaque consectetur earum omnis. Sit, sint autem! Quod, mollitia numquam vero unde dolorum modi sapiente odit incidunt.</p>
                    </div>

                  </transition-group>
                </div>

                <div class="content__right">
                  <contacts></contacts>
                </div>
              </div>
            </div>
          </div>

        </div>

        <vfooter></vfooter>
      </div>
    </div>
  </progressive-background>
</template>

<script>
import vheader from '@/components/header'
import vfooter from '@/components/footer'
import contacts from '@/components/contacts'
export default {
  components: { vheader, vfooter, contacts },
  name: 'vabout',
  data() {
    return {
      docState: 'case',
      pageText: {},
      seoTitle: 'test11'
    }
  },
  created() {
    this.requestData(this.$store.state.language)
  },
  watch: {
    language(){
      // do something
    }
  },
  computed: {
    language() {
      this.requestData(this.$store.state.language)
    }
  },
  methods: {
    showText(key) {
      this.docState = key;
    },
    requestData(lang) {
      return fetch(`http://spatz.web-y.ru/api/v1/page/get?url=about-us&lng=${lang}`, {
        method: 'GET',
        body: null,
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then((res) => res.json())
        .then((resText) => {
          this.pageText = resText;
          this.seoTitle = 'SUCCESS'
          console.log(this.seoTitle);
        })
        .catch((error) => console.log(error));
    }
  },
  metaInfo() {
    return {
      title: this.pageText.seoTitle,
      meta: [
        { keywords: this.pageText.seoKeywords },
        { description: this.pageText.seoDescription },
        { property: 'og:site_name', content: 'SPATZ' },
        { property: 'og:url', content: 'localhost' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: this.pageText.seoTitle },
        { property: 'og:description', content: this.pageText.seoDescription },
        { property: 'og:image', content: this.pageText.seoImage },
        { property: 'og:image:type', content: 'image/jpeg' }
      ]
    }
  }


}
</script>

<style lang="sass">
.cls-1
  opacity: 0.7
.cls-2
  fill: none
  stroke: #fff
  stroke-miterlimit: 10
  stroke-width: 1.2px
.activesvg
  stroke: #0086bc
.aside
  position: absolute
  top: 33%
  left: 50px
  @media (max-width: 980px)
    position: relative
    top: unset
    left: unset
  &__wrap
    @media (max-width: 640px), (max-height: 640px)
      margin-bottom: 20px
  &__navbar
    display: flex
    flex-direction: column
    justify-content: space-between
    height: 265px
    @media (max-width: 980px)
      flex-direction: row
      justify-content: space-around
      height: auto
  &__btn
    width: 50px
    height: 50px
    text-decoration: none
    color: #fff

    img
      width: 50px
      height: 50px

.textblock
  @media (max-width: 800px), (max-height: 640px)
    height: 210px

.textslide-enter-active
  transition: all 1.8s ease
.textslide-leave-active
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)
.textslide-enter, .textslide-leave-to
  transform: translateX(50px)
  opacity: 0
</style>
