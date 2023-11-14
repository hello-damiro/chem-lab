import cn from '../lib/tailwindMerge';

export default function Logo({ color = 'white', orientation = 'vertical', className }) {
  return (
    <div
      className={cn(
        orientation === 'horizontal' ? 'flex flex-row items-end gap-2' : 'flex flex-col justify-center gap-2'
      )}
    >
      {/* LABS */}
      <svg
        className={className}
        width='120'
        height='46'
        viewBox='0 0 120 46'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M9.61261 44.9204C7.92619 44.9204 6.47165 44.6513 5.24899 44.1131C4.02634 43.5749 3.01448 42.8711 2.21343 42.0017C1.45454 41.1324 0.885372 40.1595 0.505927 39.0831C0.168642 37.9653 0 36.8268 0 35.6677V0.706055H8.22131V35.1709C8.22131 36.1231 8.43212 36.8475 8.85372 37.3443C9.31749 37.8411 10.0764 38.0895 11.1304 38.0895H14.2924V44.9204H9.61261Z'
          fill={color}
        />
        <path
          d='M41.7333 44.9204V42.1259C40.6371 43.2023 39.4777 43.9889 38.255 44.4857C37.0745 44.9825 35.5357 45.2309 33.6384 45.2309C29.9705 45.2309 27.1668 44.2787 25.2274 42.3743C24.342 41.4636 23.6674 40.3872 23.2037 39.1452C22.7399 37.9032 22.508 36.5577 22.508 35.1088C22.508 33.8254 22.7399 32.6248 23.2037 31.507C23.6674 30.3479 24.3631 29.3543 25.2906 28.5263C26.2182 27.6569 27.3776 26.9738 28.7689 26.477C30.2023 25.9803 31.8677 25.7319 33.7649 25.7319H41.5435V24.1173C41.5435 22.3371 41.0587 21.0538 40.089 20.2672C39.1615 19.4392 37.6015 19.0252 35.4092 19.0252C34.6081 19.0252 33.9125 19.0873 33.3222 19.2115C32.732 19.2943 32.1839 19.4392 31.678 19.6462C31.2142 19.8532 30.7715 20.1223 30.3499 20.4535C29.9283 20.7847 29.5067 21.1986 29.0851 21.6954L23.8361 16.6654C25.4382 14.9267 27.1246 13.7468 28.8954 13.1258C30.7083 12.5048 32.9849 12.1943 35.7254 12.1943C40.363 12.1943 43.8624 13.1465 46.2234 15.0509C48.5844 16.9552 49.7649 19.8118 49.7649 23.6205V44.9204H41.7333ZM41.5435 31.2587H35.0297C33.5541 31.2587 32.4158 31.5898 31.6147 32.2522C30.8137 32.8732 30.4131 33.7633 30.4131 34.9225C30.4131 36.0403 30.7926 36.951 31.5515 37.6548C32.3525 38.3172 33.5541 38.6484 35.1562 38.6484C36.2945 38.6484 37.2642 38.5656 38.0653 38.4C38.8663 38.2344 39.6252 37.7997 40.342 37.0959C41.143 36.3508 41.5435 34.9846 41.5435 32.9974V31.2587Z'
          fill={color}
        />
        <path
          d='M85.4935 28.7126C85.4935 29.9132 85.4724 31.1552 85.4302 32.4385C85.3881 33.7219 85.2616 34.9639 85.0508 36.1645C84.84 37.365 84.5027 38.5035 84.0389 39.5799C83.5752 40.6563 82.9428 41.5878 82.1417 42.3743C81.2142 43.2851 80.0337 44.0096 78.6002 44.5478C77.2089 45.0446 75.7122 45.293 74.1101 45.293C72.3394 45.293 70.8005 45.0446 69.4935 44.5478C68.2287 44.0096 67.0271 43.1195 65.8888 41.8775V44.9204H57.9204V0.706055H66.1418V15.4235C67.2379 14.2229 68.4184 13.3949 69.6832 12.9395C70.9481 12.4427 72.4237 12.1943 74.1101 12.1943C75.7122 12.1943 77.2089 12.4634 78.6002 13.0016C80.0337 13.4984 81.2142 14.2022 82.1417 15.113C82.9428 15.941 83.5752 16.8931 84.0389 17.9695C84.5027 19.0045 84.84 20.1223 85.0508 21.3228C85.2616 22.5234 85.3881 23.7654 85.4302 25.0488C85.4724 26.2907 85.4935 27.512 85.4935 28.7126ZM77.2721 28.7126C77.2721 27.3878 77.2089 26.1666 77.0824 25.0488C76.9559 23.931 76.703 22.9581 76.3235 22.1301C75.9441 21.3021 75.3749 20.6605 74.616 20.2051C73.8993 19.7083 72.9296 19.4599 71.7069 19.4599C70.4843 19.4599 69.4935 19.7083 68.7346 20.2051C68.0179 20.6605 67.4698 21.3021 67.0904 22.1301C66.7109 22.9581 66.458 23.931 66.3315 25.0488C66.205 26.1666 66.1418 27.3878 66.1418 28.7126C66.1418 30.0374 66.205 31.2794 66.3315 32.4385C66.458 33.5563 66.7109 34.5292 67.0904 35.3572C67.4698 36.1852 68.0179 36.8475 68.7346 37.3443C69.4935 37.7997 70.4843 38.0274 71.7069 38.0274C72.9296 38.0274 73.8993 37.7997 74.616 37.3443C75.3749 36.8475 75.9441 36.1852 76.3235 35.3572C76.703 34.5292 76.9559 33.5563 77.0824 32.4385C77.2089 31.2794 77.2721 30.0374 77.2721 28.7126Z'
          fill={color}
        />
        <path
          d='M119.889 34.7362C119.889 36.5163 119.531 38.0688 118.814 39.3936C118.097 40.7184 117.107 41.8154 115.842 42.6848C114.577 43.5542 113.08 44.2166 111.352 44.672C109.665 45.086 107.852 45.293 105.913 45.293C104.606 45.293 103.341 45.2309 102.119 45.1067C100.896 45.0239 99.6944 44.8169 98.5139 44.4857C97.3334 44.1545 96.195 43.6991 95.0988 43.1195C94.0027 42.4985 92.9276 41.6705 91.8736 40.6356L97.249 35.3572C98.5982 36.6819 100.074 37.5306 101.676 37.9032C103.32 38.2344 104.775 38.4 106.04 38.4C106.756 38.4 107.452 38.3379 108.126 38.2137C108.843 38.0895 109.476 37.9032 110.024 37.6548C110.572 37.365 111.014 37.0131 111.352 36.5991C111.689 36.1852 111.858 35.6677 111.858 35.0467C111.858 34.2187 111.605 33.5563 111.099 33.0595C110.593 32.5213 109.686 32.1901 108.379 32.0659L103.194 31.5691C100.2 31.2793 97.8393 30.4514 96.1107 29.0852C94.4243 27.6776 93.5811 25.4835 93.5811 22.5027C93.5811 20.8468 93.9183 19.3771 94.5929 18.0937C95.3096 16.8103 96.2372 15.734 97.3755 14.8646C98.556 13.9952 99.9052 13.3328 101.423 12.8774C102.983 12.422 104.606 12.1943 106.292 12.1943C108.864 12.1943 111.204 12.4634 113.312 13.0016C115.42 13.5398 117.275 14.5334 118.877 15.9824L113.818 21.0124C112.848 20.1844 111.689 19.6255 110.34 19.3357C108.991 19.0045 107.599 18.8389 106.166 18.8389C104.522 18.8389 103.32 19.1494 102.561 19.7704C101.845 20.3914 101.486 21.1159 101.486 21.9438C101.486 22.2336 101.528 22.5441 101.613 22.8753C101.697 23.1651 101.866 23.4342 102.119 23.6826C102.372 23.931 102.709 24.1587 103.13 24.3657C103.594 24.5727 104.184 24.6969 104.901 24.7383L110.087 25.2351C113.375 25.5663 115.821 26.5598 117.423 28.2158C119.067 29.8304 119.889 32.0038 119.889 34.7362Z'
          fill={color}
        />
      </svg>

      {/* GAMES */}
      <svg
        className={className}
        width='120'
        height='37'
        viewBox='0 0 120 37'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M23.2502 24.1987C23.2502 25.9148 23.0441 27.3901 22.6321 28.6245C22.22 29.8288 21.5068 30.9428 20.4925 31.9665C19.3831 33.1407 18.0518 34.059 16.4986 34.7213C14.9454 35.3536 13.313 35.6697 11.6013 35.6697C9.98474 35.6697 8.4474 35.3837 6.98932 34.8117C5.53123 34.2396 4.24748 33.4267 3.13806 32.3729C2.37732 31.6503 1.77506 30.8976 1.3313 30.1148C0.91923 29.332 0.602254 28.4439 0.380371 27.4503C0.190186 26.4567 0.0792441 25.3126 0.0475465 24.018C0.0158488 22.6933 0 21.1277 0 19.3212C0 17.5147 0.0158488 15.9642 0.0475465 14.6695C0.0792441 13.3448 0.190186 12.1856 0.380371 11.1921C0.602254 10.1985 0.91923 9.31035 1.3313 8.52755C1.77506 7.74474 2.37732 6.99205 3.13806 6.26946C4.24748 5.21569 5.53123 4.40278 6.98932 3.83073C8.4474 3.25868 9.98474 2.97266 11.6013 2.97266C13.0594 2.97266 14.4382 3.19847 15.7378 3.65008C17.0374 4.1017 18.1944 4.73396 19.2087 5.54687C20.2231 6.35979 21.063 7.35334 21.7287 8.52755C22.426 9.67164 22.9015 10.9512 23.1551 12.3663H20.5876C20.0804 10.1082 19.0185 8.3469 17.402 7.08237C15.8171 5.78774 13.8835 5.14042 11.6013 5.14042C10.3968 5.14042 9.23984 5.35117 8.13043 5.77268C7.02101 6.19419 6.03839 6.8114 5.18255 7.62431C4.5803 8.19636 4.10484 8.81357 3.75616 9.47594C3.40749 10.1082 3.13806 10.876 2.94787 11.7792C2.78939 12.6523 2.67845 13.7061 2.61505 14.9405C2.58335 16.1448 2.5675 17.605 2.5675 19.3212C2.5675 21.0373 2.58335 22.5126 2.61505 23.747C2.67845 24.9514 2.78939 26.0051 2.94787 26.9084C3.13806 27.7815 3.40749 28.5492 3.75616 29.2116C4.10484 29.8439 4.5803 30.446 5.18255 31.0181C6.03839 31.831 7.02101 32.4482 8.13043 32.8697C9.23984 33.2912 10.3968 33.502 11.6013 33.502C12.9326 33.502 14.2164 33.246 15.4526 32.7342C16.6888 32.1923 17.7506 31.4095 18.6382 30.3858C19.3672 29.5127 19.8902 28.5793 20.2072 27.5858C20.5242 26.5922 20.6827 25.403 20.6827 24.018V21.1277H11.6013V18.9599H23.2502V24.1987Z'
          fill={color}
        />
        <path
          d='M88.8553 8.88884L78.5853 30.8826H76.0178L65.5576 8.88884V35.3988H62.9901V3.24363H65.5576L77.3491 28.0374L88.8553 3.24363H91.4228V35.3988H88.8553V8.88884Z'
          fill={color}
        />
        <path
          d='M99.3492 3.24363H119.889V5.41139H101.917V18.1018H117.227V20.2696H101.917V33.231H119.889V35.3988H99.3492V3.24363Z'
          fill={color}
        />
        <path
          d='M29.5544 7.2891C29.8069 8.23166 30.7785 8.79029 31.7244 8.53684L33.6091 15.5707L29.6292 30.333C28.7624 33.5483 31.7043 36.4948 34.921 35.6329L53.6509 30.6142C56.8676 29.7523 57.9421 25.7296 55.5838 23.3785L44.7559 12.584L42.8712 5.55006C43.8171 5.29661 44.3792 4.32704 44.1266 3.38447C43.8741 2.4419 42.9025 1.88327 41.9566 2.13673L30.8098 5.1235C29.8639 5.37696 29.3018 6.34653 29.5544 7.2891Z'
          fill={color}
          fill-opacity='0.3'
        />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M33.2368 6.52473L35.6611 15.5723L31.5426 30.8488C31.0732 32.5899 32.6662 34.1855 34.4081 33.7188L53.138 28.7001C54.8799 28.2334 55.4617 26.055 54.1847 24.7819L42.9797 13.6113L40.5554 4.56373L33.2368 6.52473ZM31.7244 8.53684C30.7785 8.79029 29.8069 8.23166 29.5544 7.2891C29.3018 6.34653 29.8639 5.37696 30.8098 5.1235L41.9566 2.13673C42.9025 1.88327 43.8741 2.4419 44.1266 3.38447C44.3792 4.32704 43.8171 5.29661 42.8712 5.55006L44.7559 12.584L55.5838 23.3785C57.9421 25.7296 56.8675 29.7523 53.6509 30.6142L34.921 35.6329C31.7043 36.4948 28.7624 33.5483 29.6292 30.333L33.6091 15.5707L31.7244 8.53684Z'
          fill={color}
        />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M36.0134 6.80429C36.542 6.66267 37.0853 6.97634 37.2269 7.50491L39.3252 15.3359C39.4668 15.8645 39.1532 16.4078 38.6246 16.5494C38.096 16.691 37.5527 16.3774 37.4111 15.8488L35.3128 8.0178C35.1712 7.48923 35.4848 6.94592 36.0134 6.80429Z'
          fill={color}
        />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M33.8731 32.0713C33.3452 31.9273 33.034 31.3826 33.178 30.8546L37.4118 15.3318C37.5558 14.8039 38.1005 14.4926 38.6285 14.6366C39.1564 14.7806 39.4676 15.3253 39.3237 15.8532L35.0898 31.3761C34.9458 31.904 34.4011 32.2153 33.8731 32.0713Z'
          fill={color}
        />
      </svg>
    </div>
  );
}
