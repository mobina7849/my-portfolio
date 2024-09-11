'use client'
import {SimplePaletteColorOptions} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import {ColorPartial} from "@mui/material/styles/createPalette";
import {TypographyStyleOptions} from "@mui/material/styles/createTypography";
// import {danaVF, peyda} from "../src/font/font";

const globalTheme = createTheme({
    components: {
        MuiButton: {
            variants: [
                {
                    props: {variant: 'primary'},
                    style: ({theme}) => ({
                        //green
                        backgroundColor: theme.palette['tertiary']['main'],
                        color: theme.palette['neutral']['0'],
                        // fontFamily: danaVF.style.fontFamily,
                        fontSize: "1rem",
                        fontWeight: 700,
                        lineHeight: 1.5,
                        letterSpacing: 0,
                        '@media (max-width:900px)': {
                            fontSize: "0.875rem",
                        },
                        borderRadius: 8,
                        height: 40,
                        "&:hover": {
                            backgroundColor: theme.palette['tertiary']['600'],
                            color: theme.palette['neutral']['0'],
                        },
                        '&:active': {
                            backgroundColor: theme.palette['tertiary']['400'],
                            color: theme.palette['neutral']['0'],

                        },
                        '&:disabled': {
                            backgroundColor: theme.palette['neutral']['50'],
                            color: theme.palette['neutral']['200'],
                        },
                        '&:focus': {
                            backgroundColor: theme.palette['tertiary']['main'],
                            color: theme.palette['neutral']['0'],
                        },
                    })
                },
                {
                    props: {variant: 'secondary'},
                    style: ({theme}) => ({
                        //background
                        backgroundColor: theme.palette['background']['50'],
                        color: theme.palette['secondary']['main'],
                        // fontFamily: danaVF.style.fontFamily,
                        fontSize: "1rem",
                        fontWeight: 700,
                        lineHeight: 1.5,
                        letterSpacing: 0,
                        '@media (max-width:900px)': {
                            fontSize: "0.875rem",
                        },
                        borderRadius: 8,
                        height: 40,
                        "&:hover": {
                            backgroundColor: theme.palette['background']['100'],
                            color: theme.palette['secondary']['main'],
                        },
                        '&:active': {
                            backgroundColor: theme.palette['background']['50'],
                            color: theme.palette['secondary']['main'],
                        },
                        '&:disabled': {
                            backgroundColor: theme.palette['neutral']['50'],
                            color: theme.palette['neutral']['200'],
                        },
                        '&:focus': {
                            color: theme.palette['secondary']['main'],
                            backgroundColor: theme.palette['background']['25'],
                        },
                    })
                },
                {
                    props: {variant: 'tertiary'},
                    style: ({theme}) => ({
                        //blue
                        backgroundColor: theme.palette['primary']['main'],
                        color: theme.palette['neutral']['0'],
                        // fontFamily: danaVF.style.fontFamily,
                        fontSize: "1rem",
                        fontWeight: 700,
                        lineHeight: 1.5,
                        letterSpacing: 0,
                        '@media (max-width:900px)': {
                            fontSize: "0.875rem",
                        },
                        borderRadius: 8,
                        height: 40,
                        "&:hover": {
                            // backgroundColor: `${theme.palette['primary']['700']} !important`,
                            color: theme.palette['neutral']['0'],
                        },
                        '&:active': {
                            // backgroundColor: theme.palette['primary']['400'],
                        },
                        '&:disabled': {
                            backgroundColor: theme.palette['neutral']['50'],
                            color: theme.palette['neutral']['200'],
                        },
                        '&:focus': {
                            backgroundColor: theme.palette['primary']['main'],
                        },
                    })
                },
                {
                    props: {variant: 'quaternary'},
                    style: ({theme}) => ({
                        //background green
                        backgroundColor: theme.palette['tertiary']['50'],
                        color: theme.palette['tertiary']['main'],
                        // fontFamily: danaVF.style.fontFamily,
                        fontSize: "1rem",
                        fontWeight: 700,
                        lineHeight: 1.5,
                        letterSpacing: 0,
                        '@media (max-width:900px)': {
                            fontSize: "0.875rem",
                        },
                        borderRadius: 8,
                        height: 40,
                        "&:hover": {
                            backgroundColor: theme.palette['tertiary']['100'],
                            color: theme.palette['tertiary']['main'],
                        },
                        '&:active': {
                            backgroundColor: theme.palette['tertiary']['25'],
                            color: theme.palette['tertiary']['main'],

                        },
                        '&:disabled': {
                            backgroundColor: theme.palette['neutral']['50'],
                            color: theme.palette['neutral']['200'],
                        },
                        // '&:focus': {
                        //     color: theme.palette['secondary']['main'],
                        //     border: `1px solid ${theme.palette['secondary']['main']}`,
                        //     backgroundColor: theme.palette['background']['100'],
                        // },
                    })
                },
                {
                    props: {variant: 'white'},
                    style: ({theme}) => ({
                        //white
                        backgroundColor: theme.palette['neutral']['0'],
                        color: theme.palette['secondary']['main'],
                        // fontFamily: danaVF.style.fontFamily,
                        fontSize: "1rem",
                        fontWeight: 700,
                        lineHeight: 1.5,
                        letterSpacing: 0,
                        '@media (max-width:900px)': {
                            fontSize: "0.875rem",
                        },
                        borderRadius: 8,
                        height: 40,
                        "&:hover": {
                            // border: `1px solid ${theme.palette['secondary']['600']}`,
                            backgroundColor: theme.palette['neutral']['0'],
                            color: theme.palette['secondary']['main'],
                        },
                        '&:active': {
                            // border: `1px solid ${theme.palette['secondary']['400']}`,
                            backgroundColor: theme.palette['neutral']['0'],
                            color: theme.palette['secondary']['main'],

                        },
                        '&:disabled': {
                            backgroundColor: theme.palette['neutral']['0'],
                            color: theme.palette['neutral']['100'],
                        },
                        '&:focus': {
                            color: theme.palette['primary']['main'],
                            border: `1px solid ${theme.palette['primary']['main']}`,
                            backgroundColor: theme.palette['neutral']['0'],
                        },
                    })
                },
                {
                    props: {variant: 'danger'},
                    style: ({theme}) => ({
                        //red
                        backgroundColor: theme.palette['danger']['500'],
                        color: theme.palette['neutral']['0'],
                        // fontFamily: danaVF.style.fontFamily,
                        fontSize: "1rem",
                        fontWeight: 700,
                        lineHeight: 1.5,
                        letterSpacing: 0,
                        '@media (max-width:900px)': {
                            fontSize: "0.875rem",
                        },
                        borderRadius: 8,
                        height: 40,
                        "&:hover": {
                            backgroundColor: theme.palette['danger']['600'],
                            color: theme.palette['neutral']['0'],
                        },
                        '&:active': {
                            backgroundColor: theme.palette['danger']['400'],
                            color: theme.palette['neutral']['0'],

                        },
                        '&:disabled': {
                            backgroundColor: theme.palette['neutral']['50'],
                            color: theme.palette['neutral']['200'],
                        },
                        '&:focus': {
                            color: theme.palette['neutral']['0'],
                            backgroundColor: theme.palette['danger']['500'],
                        },
                    })
                },
            ]
        }
    },
    palette: {
        primary: {
            main: '#7679EE', // it is 500 on design style guide
            '25': '#F8F9FE',
            '50': '#F1F2FD',
            '100': '#D5D5FA',
            '400': '#9194F1',
            '500': '#7679EE',
            '600': '#6B6ED9',
            '700': '#6B6ED9'
        },
        secondary: {
            main: '#431E75', // it is 500 on design style guide,
            '25': '#FFFBF3',
            '50': '#ECE9F1',
            '100': '#C5B9D4',
            '400': '#65499C',
            '500': '#431E75',
            '600': '#361163',
            '700': '#261746',
        },

        tertiary: {
            main: '#24B57C', // it is 500 on design style guide
            '25': '#F4FBF9',
            '50': '#E9F8F2',
            '100': '#BBE8D6',
            '400': '#50C496',
            '500': '#24B57C',
            '600': '#209A65',
            '700': '#217F4F',
            '800': '#1A6941'
        },
        neutral: {
            '0': '#FFFFFF',
            '25': '#F9F9F9',
            '50': '#EAEAEA',
            '100': '#BDBDBF',
            '200': '#9D9D9F',
            '300': '#707174',
            '400': '#555559',
            '500': '#2A2B2F',
            '900': '#000000'
        },
        background: {
            '25': '#F7FCFF',
            '50': '#EEF9FF',
            '75': '#E5F5FF',
            '100': '#E5ECF9',
            '200': '#CAECFF'
        },
        danger: {
            '25': '#FEF6F6',
            '50': '#FDEDED',
            '100': '#FCE3E3',
            '400': '#F16C6D',
            '500': '#ED4749',
            '600': '#D84142'
        },
        warning: {
            main: '#FEB101', // it is 500 on design style guide
            '25': '#FFFBF3',
            '50': '#FFF7E6',
            '100': '#FFF3D8',
            '400': '#FEC134',
            '500': '#FEB101',
            '600': '#E7A101'
        },
        info: {
            main: '#ECE9F1', // it is 50 on design style guide,
            '50': '#ECE9F1',
            '100': '#E2DCEA',
            '500': '#431e75',
            '600': '#3D1B6A',
            '700': '#301553',
            '900': '#1c0d31'
        },
        quaternary: {
            '25': '#F6FBFB',
            '50': '#EDF6F8',
            '100': '#C7E2E8',
            '200': '#ACD3DD',
            '300': '#86BFCD',
            '400': '#6FB3C4',
            '500': '#4BA0B5',
            '600': '#4492A5',
            '700': '#357281',
            '800': '#295864',
            '900': '#20434C'
        }
    },

    typography: {
        h1: {
            // fontFamily: peyda.style.fontFamily,
            fontSize: "2rem",
            fontWeight: 900, //extra bold
            lineHeight: 1.5,
            letterSpacing: 0,

            '@media (max-width:900px)': {
                fontSize: "1.75rem",
                fontWeight: 800,
            },
        },

        h2: {
            // fontFamily: peyda.style.fontFamily,
            fontSize: "1.5rem",
            fontWeight: 900,
            lineHeight: 1.66,
            letterSpacing: 0,

            '@media (max-width:900px)': {
                fontSize: "1.25rem",
                fontWeight: 800,
            },
        },

        h3: {
            // fontFamily: peyda.style.fontFamily,
            fontSize: "1.25rem",
            fontWeight: 800,
            lineHeight: 1.58,
            letterSpacing: 0,

            '@media (max-width:900px)': {
                fontSize: "1.125rem",
                fontWeight: 700,
            },
        },
        h3_2: {
            // fontFamily: peyda.style.fontFamily,
            fontSize: "1.125rem",
            fontWeight: 700,
            lineHeight: 1.54,
            letterSpacing: 0,

            '@media (max-width:900px)': {
                fontSize: "1rem",
                fontWeight: 700,
                lineHeight: 1.52,
            },
        },
        h4: {
            // fontFamily: peyda.style.fontFamily,
            fontSize: "1rem",
            fontWeight: 600,
            lineHeight: 1.58,
            letterSpacing: 0,

            '@media (max-width:900px)': {
                fontSize: "0.875rem",
                fontWeight: 500,
            },
        },
        h5: {
            // fontFamily: peyda.style.fontFamily,
            fontSize: "0.875rem",
            fontWeight: 500,
            lineHeight: 1.69,
            letterSpacing: 0,

            '@media (max-width:900px)': {
                fontSize: "0.75rem",
                fontWeight: 400,
            },
        },
        h6: {
            // fontFamily: peyda.style.fontFamily,
            fontSize: "0.75rem",
            fontWeight: 500,
            lineHeight: 1.64,
            letterSpacing: 0,

            '@media (max-width:900px)': {
                fontSize: "0.625rem",
                fontWeight: 400,
            },
        },
        subtitle1: {
            // fontFamily: danaVF.style.fontFamily,
            fontSize: "1.125rem",
            fontWeight: 700,
            lineHeight: 1.58,
            letterSpacing: 0,

            '@media (max-width:900px)': {
                fontSize: "1rem",
                fontWeight: 600,
            },
        },

        subtitle2: {
            // fontFamily: danaVF.style.fontFamily,
            fontSize: "0.875rem",
            fontWeight: 500,
            lineHeight: 1.64,
            letterSpacing: 0,

            '@media (max-width:900px)': {
                fontSize: "0.750rem",
                fontWeight: 400,
            },
        },

        body1: {
            // fontFamily: danaVF.style.fontFamily,
            fontSize: "1rem",
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: 0,

            '@media (max-width:900px)': {
                fontSize: "0.875rem",
                fontWeight: 300,
            },
        },

        body2: {
            // fontFamily: peyda.style.fontFamily,
            fontSize: "1rem",
            fontWeight: 800,
            lineHeight: 1.5,
            letterSpacing: 0,

            '@media (max-width:900px)': {
                fontSize: "0.875rem",
                fontWeight: 700,
            },
        },

        button: {
            // fontFamily: danaVF.style.fontFamily,
            fontSize: "1rem",
            fontWeight: 800,
            lineHeight: 1.68,
            letterSpacing: 0,

            '@media (max-width:900px)': {
                fontSize: "0.875rem",
                lineHeight: 1.5,
                fontWeight: 700,
            },
        },
        button2: {
            // fontFamily: danaVF.style.fontFamily,
            fontSize: "0.875rem",
            fontWeight: 700,
            lineHeight: 1.5,
            letterSpacing: 0,

            '@media (max-width:900px)': {
                fontSize: "0.750rem",
                fontWeight: 600,
            },
        },
        caption: {
            // fontFamily: danaVF.style.fontFamily,
            fontSize: "0.750rem",
            fontWeight: 500,
            lineHeight: 1.64,
            letterSpacing: 0,

            '@media (max-width:900px)': {
                fontSize: "0.625rem",
                fontWeight: 400,
            },
        },

    },
    direction: 'rtl',
});

declare module "@mui/material/styles" {
    interface Palette {
        tertiary: { [k: string]: string };
        quaternary: { [k: string]: string };
        neutral: { [k: string]: string };
        danger: { [k: string]: string };
    }

    interface PaletteOptions {
        tertiary: { [k: string]: string };
        quaternary: { [k: string]: string };
        neutral: { [k: string]: string };
        danger: { [k: string]: string };
    }

    interface PaletteColorOptions extends SimplePaletteColorOptions, ColorPartial{
        25?: string
    }

    interface TypeBackground {
        [k: string]: string
    }

    interface TypographyVariants {
        button2: TypographyStyleOptions;
        h3_2: TypographyStyleOptions;
    }

    interface TypographyVariantsOptions {
        button2?: TypographyStyleOptions;
        h3_2: TypographyStyleOptions;
    }
}
declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        primary: true;
        secondary: true;
        white: true;
        tertiary: true;
        quaternary: true;
        danger: true;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        button2: true;
        h3_2: true
    }
}
export default globalTheme

