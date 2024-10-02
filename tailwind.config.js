// Default config here: https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js

const colors = require('tailwindcss/colors');

module.exports = {
    content: [],
    safelist: [{
        pattern: /bg-(prim|blue|orange|red|yellow|gray|green)-100/,
    }, {
        pattern: /border-(prim|blue|orange|red|yellow|gray|green)-100/,
    },
    'bg-yellow-100',
    ],
    theme: {
        extend: {
            transitionProperty: {
                height: 'height',
            },
            spacing: {
                15: '60px',
                25: '100px',
                30: '120px',
                34: '136px',
                26: '104px',
                62: '248px',
                77: '308px',
                83: '332px',
                223: '912px',
            },
            keyframes: {
                slideUp: {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(-285%)' },
                },
                'intro-slideUp': {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(-320%)' },
                },
            },
            animation: {
                slideUp: 'slideUp 1s forwards ',
                'intro-slideUp': 'intro-slideUp 1s forwards',
            },
        },
        screens: {
            mb: '450px',
            sm: '640px',
            md: '769px',
            lg: '1024px',
            xl: '1280px',
            xxl: '1680px',
        },
        container: {
            center: true,
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: {
                100: '#303133',
                90: '#606266',
            },
            white: colors.white,
            background: {
                primary: '#070c3c',
                pastel: '#fcfbf9',
            },
            brand: {
                100: '#b99e4e',
                90: '#e3d177',
            },
            primary: {
                100: '#070c3c',
                90: '#0a155b',
                10: '#49517d',
                5: '#6c76a3',
            },
            second: {
                100: '#fcfbf9',
            },
            link: {
                100: '#3366FF',
            },
            red: {
                100: '#E82727',
            },
            blue: {
                100: '#2EA1FF',
            },
            success: {
                100: '#4BCA81',
                80: '#85CE61',
                60: '#B3E19D',
                40: '#C2E7B0',
                20: '#E1F3D8',
                10: '#F0F9EB',
            },
            warning: {
                100: '#FFC410',
                80: '#EBB563',
                60: '#F3D19E',
                40: '#F5DAB1',
                20: '#FAECD8',
                10: '#FDF6EC',
            },
            danger: {
                100: '#FF1D30',
                80: '#F78989',
                60: '#FAB6B6',
                40: '#FBC4C4',
                20: '#FDE2E2',
                10: '#FEF0F0',
            },
            info: {
                100: '#909399',
                80: '#A6A9AD',
                60: '#C8C9CC',
                40: '#D3D4D6',
                20: '#E9E9EB',
                10: '#F4F4F5',
            },
            gray: {
                110: '#D7DAE7',
                100: '#303133',
                80: '#606266',
                60: '#909399',
                40: '#C0C4CC',
                20: '#DCDFE6',
                10: '#E4E7ED',
                5: '#EBEEF5',
                2: '#F2F6FC',
            },
        },
        fontSize: {
            sm: ['12px', { lineHeight: '16px' }],
            base: ['14px', { lineHeight: '18px' }],
            lg: ['16px', { lineHeight: '21px' }],
            xl: ['18px', { lineHeight: '23px' }],
            '2xl': ['20px', { lineHeight: '26px' }],
            '3xl': ['24px', { lineHeight: '30px' }],
            '4xl': ['28px', { lineHeight: '32px' }],
            '5xl': ['32px', { lineHeight: '40px' }],
            '6xl': ['36px', { lineHeight: '42px' }],
            '7xl': ['40px', { lineHeight: '50px' }],
        },
        borderRadius: {
            none: '0px',
            sm: '4px',
            DEFAULT: '8px',
            md: '10px',
            lg: '16px',
            xl: '20px',
            full: '9999px',
        },
        keyframes: {
            'zoom-up': {
                '0%': { transform: 'scale(1)' },
                '100%': { transform: 'scale(1.05)' },
            },
            'fade-top': {
                '0%': { opacity: 0, transform: 'translateY(100%)' },
                '100%': { opacity: 1, transform: 'translateY(0%)' },
            },
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
    ],
};
