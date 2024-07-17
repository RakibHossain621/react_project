import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer sec_padding">
            <div className="footer-top relative">
                <svg className='absolute top-0 left-0 z-0' xmlns="http://www.w3.org/2000/svg" width="813" height="80" viewBox="0 0 813 80" fill="none">
                    <path d="M0 0H625L813 80H0V0Z" fill="#FF5733" />
                </svg>
                <div className='px-28 z-10 flex justify-between w-full'>
                <div className="footer-top-text z-10">Looking For Professional Company?</div>
                <div className="footer-top-contact">Call Us On 0111 756 4973</div>
                </div>
            </div>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-column">
                        <div className="footer-logo">
                            <svg width="207" height="38" viewBox="0 0 207 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="86.5556" height="38" fill="#2947A9" />
                                <path d="M16.2951 13.5268C16.1991 12.6752 15.8033 12.0154 15.1076 11.5476C14.4119 11.0738 13.5362 10.8369 12.4807 10.8369C11.725 10.8369 11.0713 10.9569 10.5195 11.1968C9.96775 11.4307 9.53893 11.7545 9.23306 12.1684C8.93318 12.5762 8.78325 13.041 8.78325 13.5628C8.78325 14.0006 8.8852 14.3784 9.08912 14.6963C9.29903 15.0142 9.57192 15.2811 9.90777 15.497C10.2496 15.7069 10.6155 15.8838 11.0053 16.0278C11.3951 16.1657 11.77 16.2796 12.1298 16.3696L13.9291 16.8374C14.5168 16.9813 15.1196 17.1763 15.7373 17.4222C16.3551 17.6681 16.9278 17.9919 17.4556 18.3938C17.9834 18.7956 18.4092 19.2934 18.7331 19.8871C19.0629 20.4809 19.2279 21.1916 19.2279 22.0192C19.2279 23.0628 18.958 23.9894 18.4182 24.7991C17.8844 25.6087 17.1077 26.2474 16.0882 26.7153C15.0746 27.1831 13.8481 27.417 12.4087 27.417C11.0293 27.417 9.8358 27.198 8.82823 26.7602C7.82065 26.3224 7.03199 25.7017 6.46222 24.898C5.89246 24.0884 5.5776 23.1288 5.51762 22.0192H8.30645C8.36043 22.6849 8.57633 23.2397 8.95418 23.6835C9.33801 24.1213 9.82681 24.4482 10.4206 24.6641C11.0203 24.874 11.677 24.979 12.3907 24.979C13.1764 24.979 13.8751 24.856 14.4868 24.6101C15.1046 24.3582 15.5904 24.0104 15.9442 23.5666C16.2981 23.1168 16.475 22.592 16.475 21.9922C16.475 21.4465 16.3191 20.9997 16.0072 20.6518C15.7013 20.3039 15.2845 20.0161 14.7567 19.7882C14.235 19.5603 13.6442 19.3593 12.9845 19.1854L10.8074 18.5917C9.33202 18.1898 8.16251 17.5991 7.29887 16.8194C6.44123 16.0397 6.01241 15.0082 6.01241 13.7247C6.01241 12.6632 6.30029 11.7366 6.87605 10.9449C7.45181 10.1532 8.23148 9.53848 9.21507 9.10067C10.1987 8.65685 11.3082 8.43495 12.5437 8.43495C13.7911 8.43495 14.8917 8.65385 15.8453 9.09167C16.8049 9.52949 17.5606 10.1322 18.1123 10.8999C18.6641 11.6616 18.952 12.5372 18.976 13.5268H16.2951ZM22.5497 27.1111V8.68684H25.3295V16.6935H34.5147V8.68684H37.3035V27.1111H34.5147V19.0775H25.3295V27.1111H22.5497ZM44.1316 8.68684V27.1111H41.3518V8.68684H44.1316ZM63.0506 8.68684V27.1111H60.4957L51.1307 13.5988H50.9597V27.1111H48.1799V8.68684H50.7528L60.1269 22.2171H60.2978V8.68684H63.0506ZM67.1057 27.1111V8.68684H78.6568V11.0798H69.8855V16.6935H78.0541V19.0775H69.8855V24.7181H78.7648V27.1111H67.1057Z" fill="white" />
                                <path d="M92.802 27.1111V8.68684H99.3692C100.797 8.68684 101.981 8.93274 102.923 9.42453C103.87 9.91632 104.578 10.597 105.046 11.4667C105.514 12.3303 105.748 13.3289 105.748 14.4624C105.748 15.5899 105.511 16.5825 105.037 17.4402C104.569 18.2918 103.861 18.9545 102.914 19.4283C101.972 19.9021 100.788 20.139 99.3602 20.139H94.3853V17.746H99.1083C100.008 17.746 100.74 17.6171 101.303 17.3592C101.873 17.1013 102.29 16.7265 102.554 16.2347C102.818 15.7429 102.95 15.1521 102.95 14.4624C102.95 13.7667 102.815 13.164 102.545 12.6542C102.281 12.1444 101.864 11.7545 101.294 11.4847C100.731 11.2088 99.99 11.0708 99.0723 11.0708H95.5818V27.1111H92.802ZM101.897 18.7986L106.449 27.1111H103.283L98.8204 18.7986H101.897ZM148.07 27.1111V8.68684H159.495V11.0798H150.85V16.6935H158.677V19.0775H150.85V27.1111H148.07ZM165.694 8.68684V27.1111H162.914V8.68684H165.694ZM184.613 8.68684V27.1111H182.058L172.693 13.5988H172.522V27.1111H169.742V8.68684H172.315L181.689 22.2171H181.86V8.68684H184.613ZM201.137 14.5074C200.963 13.9616 200.729 13.4728 200.435 13.041C200.147 12.6032 199.802 12.2313 199.4 11.9255C198.999 11.6136 198.54 11.3767 198.024 11.2148C197.514 11.0528 196.953 10.9719 196.342 10.9719C195.304 10.9719 194.368 11.2388 193.535 11.7725C192.701 12.3063 192.041 13.089 191.556 14.1206C191.076 15.1461 190.836 16.4026 190.836 17.89C190.836 19.3833 191.079 20.6458 191.565 21.6774C192.05 22.7089 192.716 23.4916 193.562 24.0254C194.407 24.5592 195.37 24.826 196.45 24.826C197.451 24.826 198.324 24.6221 199.067 24.2143C199.817 23.8065 200.396 23.2307 200.804 22.487C201.218 21.7373 201.425 20.8557 201.425 19.8421L202.144 19.9771H196.872V17.6831H204.114V19.7792C204.114 21.3265 203.785 22.67 203.125 23.8095C202.471 24.943 201.565 25.8186 200.408 26.4364C199.256 27.0541 197.937 27.363 196.45 27.363C194.782 27.363 193.319 26.9791 192.059 26.2115C190.806 25.4438 189.828 24.3552 189.127 22.9458C188.425 21.5304 188.074 19.8511 188.074 17.908C188.074 16.4386 188.278 15.1191 188.686 13.9496C189.094 12.7801 189.666 11.7875 190.404 10.9719C191.148 10.1502 192.02 9.52349 193.022 9.09167C194.03 8.65385 195.13 8.43495 196.324 8.43495C197.319 8.43495 198.246 8.58188 199.103 8.87576C199.967 9.16964 200.735 9.58646 201.407 10.1262C202.084 10.666 202.645 11.3077 203.089 12.0514C203.533 12.7891 203.832 13.6078 203.988 14.5074H201.137Z" fill="#211F1E" />
                                <path d="M125.134 17.899C125.134 19.8661 124.775 21.5574 124.055 22.9728C123.335 24.3822 122.349 25.4678 121.095 26.2295C119.848 26.9851 118.429 27.363 116.84 27.363C115.245 27.363 113.82 26.9851 112.567 26.2295C111.319 25.4678 110.336 24.3792 109.616 22.9638C108.896 21.5484 108.536 19.8601 108.536 17.899C108.536 15.9318 108.896 14.2435 109.616 12.8341C110.336 11.4187 111.319 10.3331 112.567 9.57747C113.82 8.81579 115.245 8.43495 116.84 8.43495C118.429 8.43495 119.848 8.81579 121.095 9.57747C122.349 10.3331 123.335 11.4187 124.055 12.8341C124.775 14.2435 125.134 15.9318 125.134 17.899ZM122.382 17.899C122.382 16.3996 122.139 15.1371 121.653 14.1116C121.173 13.08 120.513 12.3003 119.674 11.7725C118.84 11.2388 117.895 10.9719 116.84 10.9719C115.778 10.9719 114.831 11.2388 113.997 11.7725C113.163 12.3003 112.504 13.08 112.018 14.1116C111.538 15.1371 111.298 16.3996 111.298 17.899C111.298 19.3983 111.538 20.6638 112.018 21.6954C112.504 22.7209 113.163 23.5006 113.997 24.0344C114.831 24.5622 115.778 24.826 116.84 24.826C117.895 24.826 118.84 24.5622 119.674 24.0344C120.513 23.5006 121.173 22.7209 121.653 21.6954C122.139 20.6638 122.382 19.3983 122.382 17.899ZM144.604 17.899C144.604 19.8661 144.245 21.5574 143.525 22.9728C142.805 24.3822 141.819 25.4678 140.565 26.2295C139.318 26.9851 137.899 27.363 136.31 27.363C134.715 27.363 133.29 26.9851 132.037 26.2295C130.789 25.4678 129.806 24.3792 129.086 22.9638C128.366 21.5484 128.006 19.8601 128.006 17.899C128.006 15.9318 128.366 14.2435 129.086 12.8341C129.806 11.4187 130.789 10.3331 132.037 9.57747C133.29 8.81579 134.715 8.43495 136.31 8.43495C137.899 8.43495 139.318 8.81579 140.565 9.57747C141.819 10.3331 142.805 11.4187 143.525 12.8341C144.245 14.2435 144.604 15.9318 144.604 17.899ZM141.852 17.899C141.852 16.3996 141.609 15.1371 141.123 14.1116C140.643 13.08 139.983 12.3003 139.144 11.7725C138.31 11.2388 137.365 10.9719 136.31 10.9719C135.248 10.9719 134.301 11.2388 133.467 11.7725C132.633 12.3003 131.974 13.08 131.488 14.1116C131.008 15.1371 130.768 16.3996 130.768 17.899C130.768 19.3983 131.008 20.6638 131.488 21.6954C131.974 22.7209 132.633 23.5006 133.467 24.0344C134.301 24.5622 135.248 24.826 136.31 24.826C137.365 24.826 138.31 24.5622 139.144 24.0344C139.983 23.5006 140.643 22.7209 141.123 21.6954C141.609 20.6638 141.852 19.3983 141.852 17.899Z" fill="#FF5733" />
                                <rect x="90.7778" width="116.111" height="2.11111" fill="#211F1E" />
                                <rect x="90.7778" y="35.8889" width="116.111" height="2.11111" fill="#211F1E" />
                            </svg>
                        </div>
                        <div className="footer-description">
                            Solid Close is your premier transaction coordination specialist, adeptly managing the intricacies of various deals, from real estate to material assets. Our expert team ensures smooth closings, giving you the freedom and peace of mind to focus on what matters most.
                        </div>
                    </div>
                    <div className="footer-column">
                        <div className="footer-title pb-5">Contact Details</div>
                        <div className="footer-contact">
                            <div className="footer_li_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <g clip-path="url(#clip0_1_301)">
                                        <path d="M0.214004 6.48441C0.214004 7.07066 0.429004 7.71503 0.702129 8.39878C0.975254 9.08253 1.32713 9.72691 1.60088 10.215C2.34338 11.5044 3.30025 12.7738 4.394 13.8282C5.48775 14.8825 6.77713 15.7619 8.22213 16.2894C9.06213 16.6213 9.90213 16.9925 10.8396 16.9925C11.3084 16.9925 11.9728 16.8169 12.5778 16.5625C13.164 16.3088 13.6909 15.9182 13.8865 15.4494C13.9646 15.2738 14.0621 15.0394 14.1209 14.7657C14.1796 14.5119 14.2184 14.2575 14.2184 14.0819C14.2184 13.9844 14.2184 13.8863 14.199 13.8669C14.1403 13.7494 14.0034 13.6519 13.8471 13.5544C13.4953 13.3788 13.4371 13.32 12.9096 13.0075C12.3628 12.695 11.7965 12.3432 11.3078 12.0894C11.0734 11.9525 10.9171 11.8938 10.8584 11.8938C10.5459 11.8938 10.1553 12.3238 9.82338 12.7925C9.4715 13.2613 9.08088 13.6913 8.80775 13.6913C8.67088 13.6913 8.534 13.6325 8.37775 13.535C8.2215 13.4375 8.06525 13.3594 7.96775 13.3007C6.249 12.3238 5.0965 11.1719 4.12025 9.47253C4.00275 9.27691 3.72963 8.86691 3.72963 8.65191C3.72963 8.39816 4.0815 8.10503 4.43275 7.79253C4.76463 7.49941 5.1165 7.14816 5.1165 6.71816C5.1165 6.65941 5.07713 6.48378 4.999 6.23003C4.82338 5.72191 4.589 5.13628 4.39338 4.57003C4.29588 4.29628 4.21775 4.10128 4.19775 4.00378C4.15838 3.94503 4.139 3.86691 4.11963 3.76941C4.10025 3.67191 4.06088 3.59378 4.0415 3.51566C3.98275 3.34003 3.88525 3.20316 3.78775 3.12503C3.69025 3.08566 3.45588 3.02753 3.2215 3.00753C2.98713 3.00753 2.71338 2.98816 2.5965 2.98816C2.53775 2.98816 2.45963 2.98816 2.3815 3.00753H2.12775C1.50275 3.28128 1.05338 3.82816 0.721504 4.47253C0.409004 5.11691 0.213379 5.84003 0.213379 6.48441H0.214004Z" fill="#211F1E" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_301">
                                            <rect width="20" height="20" fill="white" transform="translate(0.213867)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p>0111 756 4973</p>
                            </div>

                            <div className="footer_li_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <g clip-path="url(#clip0_1_301)">
                                        <path d="M0.214004 6.48441C0.214004 7.07066 0.429004 7.71503 0.702129 8.39878C0.975254 9.08253 1.32713 9.72691 1.60088 10.215C2.34338 11.5044 3.30025 12.7738 4.394 13.8282C5.48775 14.8825 6.77713 15.7619 8.22213 16.2894C9.06213 16.6213 9.90213 16.9925 10.8396 16.9925C11.3084 16.9925 11.9728 16.8169 12.5778 16.5625C13.164 16.3088 13.6909 15.9182 13.8865 15.4494C13.9646 15.2738 14.0621 15.0394 14.1209 14.7657C14.1796 14.5119 14.2184 14.2575 14.2184 14.0819C14.2184 13.9844 14.2184 13.8863 14.199 13.8669C14.1403 13.7494 14.0034 13.6519 13.8471 13.5544C13.4953 13.3788 13.4371 13.32 12.9096 13.0075C12.3628 12.695 11.7965 12.3432 11.3078 12.0894C11.0734 11.9525 10.9171 11.8938 10.8584 11.8938C10.5459 11.8938 10.1553 12.3238 9.82338 12.7925C9.4715 13.2613 9.08088 13.6913 8.80775 13.6913C8.67088 13.6913 8.534 13.6325 8.37775 13.535C8.2215 13.4375 8.06525 13.3594 7.96775 13.3007C6.249 12.3238 5.0965 11.1719 4.12025 9.47253C4.00275 9.27691 3.72963 8.86691 3.72963 8.65191C3.72963 8.39816 4.0815 8.10503 4.43275 7.79253C4.76463 7.49941 5.1165 7.14816 5.1165 6.71816C5.1165 6.65941 5.07713 6.48378 4.999 6.23003C4.82338 5.72191 4.589 5.13628 4.39338 4.57003C4.29588 4.29628 4.21775 4.10128 4.19775 4.00378C4.15838 3.94503 4.139 3.86691 4.11963 3.76941C4.10025 3.67191 4.06088 3.59378 4.0415 3.51566C3.98275 3.34003 3.88525 3.20316 3.78775 3.12503C3.69025 3.08566 3.45588 3.02753 3.2215 3.00753C2.98713 3.00753 2.71338 2.98816 2.5965 2.98816C2.53775 2.98816 2.45963 2.98816 2.3815 3.00753H2.12775C1.50275 3.28128 1.05338 3.82816 0.721504 4.47253C0.409004 5.11691 0.213379 5.84003 0.213379 6.48441H0.214004Z" fill="#211F1E" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_301">
                                            <rect width="20" height="20" fill="white" transform="translate(0.213867)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p>0111 756 4973</p>
                            </div>

                            <div className="footer_li_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <g clip-path="url(#clip0_1_311)">
                                        <path d="M19.6109 2.6886H0.816914C0.484258 2.6886 0.213867 2.95899 0.213867 3.29223V4.47938L10.2139 11.1804L20.2139 4.47875V3.29223C20.2139 2.95899 19.9435 2.6886 19.6109 2.6886Z" fill="#211F1E" />
                                        <path d="M0.213867 6.95375V14.8987C0.213867 16.2317 1.29359 17.3114 2.62719 17.3114H17.8005C19.1342 17.3114 20.2139 16.2317 20.2139 14.8987V6.95312L10.2139 13.6548L0.213867 6.95375Z" fill="#211F1E" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_311">
                                            <rect width="20" height="20" fill="white" transform="translate(0.213867)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p>info@tho.com</p>
                            </div>

                            <div className="footer_li_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <path d="M10.2139 0C6.07199 0 2.71387 3.35813 2.71387 7.5C2.71387 9.13094 3.24855 10.6275 4.1373 11.8531C4.15324 11.8825 4.15574 11.9153 4.17387 11.9434L9.17387 19.4434C9.40574 19.7913 9.79637 20 10.2139 20C10.6314 20 11.022 19.7913 11.2539 19.4434L16.2539 11.9434C16.2723 11.9153 16.2745 11.8825 16.2904 11.8531C17.1792 10.6275 17.7139 9.13094 17.7139 7.5C17.7139 3.35813 14.3557 0 10.2139 0ZM10.2139 10C8.83324 10 7.71387 8.88062 7.71387 7.5C7.71387 6.11937 8.83324 5 10.2139 5C11.5945 5 12.7139 6.11937 12.7139 7.5C12.7139 8.88062 11.5945 10 10.2139 10Z" fill="#211F1E" />
                                </svg>
                                <p className='footer23'>Black Lake RoadKissimmee, FL 34747US</p>
                            </div>

                            <div className="footer_li_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <path d="M16.8807 10.0417C16.8651 8.7713 16.4868 7.53179 15.7903 6.46917C15.0938 5.40656 14.1082 4.56508 12.9495 4.04386C11.7908 3.52263 10.5073 3.34337 9.25009 3.52716C7.99295 3.71096 6.81449 4.25016 5.85351 5.08128C4.89253 5.9124 4.18905 7.00082 3.82593 8.21834C3.46281 9.43588 3.45516 10.7318 3.80389 11.9535C4.15263 13.1753 4.84321 14.2719 5.79432 15.1143C6.74542 15.9567 7.91744 16.5098 9.17234 16.7084V11.9834H7.50569V10.0417H9.17234V8.56672C9.13376 8.22377 9.17093 7.87651 9.28126 7.54947C9.39159 7.22244 9.57234 6.92361 9.81076 6.67407C10.0492 6.42452 10.3394 6.23034 10.6611 6.10525C10.9828 5.98015 11.328 5.92717 11.6723 5.95007C12.1722 5.95692 12.6708 6.00149 13.164 6.08341V7.75007H12.3307C12.187 7.73195 12.041 7.74635 11.9037 7.79221C11.7663 7.83807 11.6409 7.91421 11.5369 8.01501C11.4329 8.11581 11.3529 8.23869 11.3028 8.37455C11.2527 8.51047 11.2338 8.65588 11.2473 8.80005V10.0584H13.0973L12.7973 12H11.2557V16.6667C12.8306 16.4176 14.2641 15.6123 15.2961 14.3968C16.3281 13.1813 16.8903 11.6362 16.8807 10.0417Z" fill="#211F1E" />
                                </svg>
                                <p>Follow Us</p>
                            </div>

                        </div>
                    </div>
                    <div className="footer-column">
                        <div className="footer-title pb-5">Our Services</div>
                          <div className="footer_wrap_service">
                          <ul className="footer-services">
                            <div className="footer_li_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7596 1.66663C15.362 1.66663 19.0929 5.39759 19.0929 9.99996C19.0929 14.6023 15.362 18.3333 10.7596 18.3333C6.15723 18.3333 2.42627 14.6023 2.42627 9.99996C2.42627 5.39759 6.15723 1.66663 10.7596 1.66663ZM10.7596 5.83329C8.45842 5.83329 6.59294 7.69877 6.59294 9.99996C6.59294 12.3011 8.45842 14.1666 10.7596 14.1666C13.0608 14.1666 14.9263 12.3011 14.9263 9.99996C14.9263 7.69877 13.0608 5.83329 10.7596 5.83329Z" fill="#211F1E" />
                                </svg>
                                <li>Flat Roofing</li>
                            </div>
                            <div className="footer_li_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7596 1.66663C15.362 1.66663 19.0929 5.39759 19.0929 9.99996C19.0929 14.6023 15.362 18.3333 10.7596 18.3333C6.15723 18.3333 2.42627 14.6023 2.42627 9.99996C2.42627 5.39759 6.15723 1.66663 10.7596 1.66663ZM10.7596 5.83329C8.45842 5.83329 6.59294 7.69877 6.59294 9.99996C6.59294 12.3011 8.45842 14.1666 10.7596 14.1666C13.0608 14.1666 14.9263 12.3011 14.9263 9.99996C14.9263 7.69877 13.0608 5.83329 10.7596 5.83329Z" fill="#211F1E" />
                                </svg>
                                <li>Chimney Work</li>
                            </div>
                            <div className="footer_li_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7596 1.66663C15.362 1.66663 19.0929 5.39759 19.0929 9.99996C19.0929 14.6023 15.362 18.3333 10.7596 18.3333C6.15723 18.3333 2.42627 14.6023 2.42627 9.99996C2.42627 5.39759 6.15723 1.66663 10.7596 1.66663ZM10.7596 5.83329C8.45842 5.83329 6.59294 7.69877 6.59294 9.99996C6.59294 12.3011 8.45842 14.1666 10.7596 14.1666C13.0608 14.1666 14.9263 12.3011 14.9263 9.99996C14.9263 7.69877 13.0608 5.83329 10.7596 5.83329Z" fill="#211F1E" />
                                </svg>
                                <li>Lead Work</li>
                            </div>
                            <div className="footer_li_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7596 1.66663C15.362 1.66663 19.0929 5.39759 19.0929 9.99996C19.0929 14.6023 15.362 18.3333 10.7596 18.3333C6.15723 18.3333 2.42627 14.6023 2.42627 9.99996C2.42627 5.39759 6.15723 1.66663 10.7596 1.66663ZM10.7596 5.83329C8.45842 5.83329 6.59294 7.69877 6.59294 9.99996C6.59294 12.3011 8.45842 14.1666 10.7596 14.1666C13.0608 14.1666 14.9263 12.3011 14.9263 9.99996C14.9263 7.69877 13.0608 5.83329 10.7596 5.83329Z" fill="#211F1E" />
                                </svg>
                                <li>New Roof</li>
                            </div>
                            <div className="footer_li_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7596 1.66663C15.362 1.66663 19.0929 5.39759 19.0929 9.99996C19.0929 14.6023 15.362 18.3333 10.7596 18.3333C6.15723 18.3333 2.42627 14.6023 2.42627 9.99996C2.42627 5.39759 6.15723 1.66663 10.7596 1.66663ZM10.7596 5.83329C8.45842 5.83329 6.59294 7.69877 6.59294 9.99996C6.59294 12.3011 8.45842 14.1666 10.7596 14.1666C13.0608 14.1666 14.9263 12.3011 14.9263 9.99996C14.9263 7.69877 13.0608 5.83329 10.7596 5.83329Z" fill="#211F1E" />
                                </svg>
                                <li>Roof Repairs</li>
                            </div>
                       </ul>
                          </div>
                    </div>
                    <div className="footer-column">
                        <div className="footer-title pb-5 ">Our Services</div>
                        <ul className="footer-services">
                            <div className="footer_li_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7596 1.66663C15.362 1.66663 19.0929 5.39759 19.0929 9.99996C19.0929 14.6023 15.362 18.3333 10.7596 18.3333C6.15723 18.3333 2.42627 14.6023 2.42627 9.99996C2.42627 5.39759 6.15723 1.66663 10.7596 1.66663ZM10.7596 5.83329C8.45842 5.83329 6.59294 7.69877 6.59294 9.99996C6.59294 12.3011 8.45842 14.1666 10.7596 14.1666C13.0608 14.1666 14.9263 12.3011 14.9263 9.99996C14.9263 7.69877 13.0608 5.83329 10.7596 5.83329Z" fill="#211F1E" />
                                </svg>
                                <li>Home</li>
                            </div>
                            <div className="footer_li_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7596 1.66663C15.362 1.66663 19.0929 5.39759 19.0929 9.99996C19.0929 14.6023 15.362 18.3333 10.7596 18.3333C6.15723 18.3333 2.42627 14.6023 2.42627 9.99996C2.42627 5.39759 6.15723 1.66663 10.7596 1.66663ZM10.7596 5.83329C8.45842 5.83329 6.59294 7.69877 6.59294 9.99996C6.59294 12.3011 8.45842 14.1666 10.7596 14.1666C13.0608 14.1666 14.9263 12.3011 14.9263 9.99996C14.9263 7.69877 13.0608 5.83329 10.7596 5.83329Z" fill="#211F1E" />
                                </svg>
                                <li>About</li>
                            </div>
                            <div className="footer_li_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7596 1.66663C15.362 1.66663 19.0929 5.39759 19.0929 9.99996C19.0929 14.6023 15.362 18.3333 10.7596 18.3333C6.15723 18.3333 2.42627 14.6023 2.42627 9.99996C2.42627 5.39759 6.15723 1.66663 10.7596 1.66663ZM10.7596 5.83329C8.45842 5.83329 6.59294 7.69877 6.59294 9.99996C6.59294 12.3011 8.45842 14.1666 10.7596 14.1666C13.0608 14.1666 14.9263 12.3011 14.9263 9.99996C14.9263 7.69877 13.0608 5.83329 10.7596 5.83329Z" fill="#211F1E" />
                                </svg>
                                <li>Services</li>
                            </div>
                            <div className="footer_li_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7596 1.66663C15.362 1.66663 19.0929 5.39759 19.0929 9.99996C19.0929 14.6023 15.362 18.3333 10.7596 18.3333C6.15723 18.3333 2.42627 14.6023 2.42627 9.99996C2.42627 5.39759 6.15723 1.66663 10.7596 1.66663ZM10.7596 5.83329C8.45842 5.83329 6.59294 7.69877 6.59294 9.99996C6.59294 12.3011 8.45842 14.1666 10.7596 14.1666C13.0608 14.1666 14.9263 12.3011 14.9263 9.99996C14.9263 7.69877 13.0608 5.83329 10.7596 5.83329Z" fill="#211F1E" />
                                </svg>
                                <li>Areas We Cover</li>
                            </div>
                            <div className="footer_li_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7596 1.66663C15.362 1.66663 19.0929 5.39759 19.0929 9.99996C19.0929 14.6023 15.362 18.3333 10.7596 18.3333C6.15723 18.3333 2.42627 14.6023 2.42627 9.99996C2.42627 5.39759 6.15723 1.66663 10.7596 1.66663ZM10.7596 5.83329C8.45842 5.83329 6.59294 7.69877 6.59294 9.99996C6.59294 12.3011 8.45842 14.1666 10.7596 14.1666C13.0608 14.1666 14.9263 12.3011 14.9263 9.99996C14.9263 7.69877 13.0608 5.83329 10.7596 5.83329Z" fill="#211F1E" />
                                </svg>
                                <li>Contact Us</li>
                            </div>

                       </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;