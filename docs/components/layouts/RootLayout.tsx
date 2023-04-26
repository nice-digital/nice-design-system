import { ReactNode } from "react";
import { Container } from "@nice-digital/nds-container";
import { Footer } from "@nice-digital/global-nav";
import styles from "./RootLayout.module.scss";
export interface RootLayoutProps {
	children: ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
	return (
		<>
			<Container>
				<header className={styles.header}>
					<svg
						viewBox="0 0 4411 512"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className={styles.logo}
						aria-hidden="true"
						focusable="false"
					>
						<path
							d="M395.255 39.65v434.318h-79.301l-188.91-273.361h-3.237v273.361H32V39.65h80.625l187.439 273.214h3.826V39.65h91.365ZM550.032 39.65h-91.807v434.318h91.807V39.65ZM996.266 191.779h-92.837c-1.765-12.064-5.149-22.657-10.446-32.073-5.296-9.416-11.917-17.361-20.156-24.129-8.239-6.621-17.655-11.77-28.248-15.301-10.741-3.531-22.216-5.297-34.722-5.297-22.511 0-42.078 5.591-58.704 16.626-16.625 11.034-29.572 27.218-38.841 48.404-9.122 21.186-13.83 46.786-13.83 76.947s4.561 56.938 13.83 77.977 22.216 36.929 38.841 47.669c16.626 10.74 36.046 16.037 57.968 16.037 12.359 0 23.688-1.618 34.281-4.855s19.862-7.945 28.101-14.271c8.239-6.327 15.007-13.977 20.45-22.952 5.444-8.975 9.269-19.421 11.329-30.897l92.837.442c-2.354 19.862-8.386 39.135-17.95 57.526-9.563 18.391-22.363 34.869-38.4 49.435-16.036 14.418-35.163 25.894-57.232 34.28-22.069 8.386-47.08 12.653-75.034 12.653-38.694 0-73.269-8.828-103.724-26.336s-54.437-42.961-72.092-76.064c-17.655-33.251-26.483-73.416-26.483-120.644 0-47.227 8.975-87.687 26.777-120.938 17.802-33.25 41.931-58.556 72.533-76.064 30.603-17.508 64.883-26.189 102.989-26.189 25.158 0 48.552 3.532 70.032 10.594 21.628 7.062 40.754 17.36 57.379 30.896 16.626 13.536 30.308 30.014 40.754 49.582 10.593 19.568 17.214 41.784 20.304 66.942M1049.53 473.968V39.65h292.63v75.771h-200.83V218.85h185.82v75.771h-185.82v103.724h201.71v75.623h-293.51ZM1599.34 168.68h-1.62l-89.6-128.882h-19.13v163.751h19.87V74.961h1.47l89.3 128.588h19.13V39.798h-19.42V168.68ZM1726.31 127.779c-2.21 1.177-5.59 2.06-10.3 2.649-4.71.441-10.74 1.177-18.25 2.207-5.73.735-11.32 1.765-17.06 2.942-5.59 1.324-10.74 3.09-15.45 5.591-4.71 2.501-8.39 5.885-11.18 10.299-2.8 4.413-4.12 10.151-4.12 17.213 0 7.945 1.91 14.86 5.59 20.451 3.68 5.591 8.83 9.858 15.15 12.8 6.33 2.943 13.39 4.414 21.19 4.414 7.21 0 13.24-1.03 18.1-3.237 5-2.06 8.97-4.708 11.91-7.798 2.95-3.089 5.15-5.885 6.33-8.533h1.03v16.625h18.83V122.63c0-9.71-1.62-17.508-4.85-23.393-3.24-5.885-7.21-10.152-12.07-13.094-4.85-2.943-9.85-4.856-15-5.738-5.15-.883-9.71-1.472-13.69-1.472-6.18 0-12.5.883-18.83 2.501-6.33 1.619-12.21 4.561-17.51 8.828-5.29 4.12-9.71 10.005-12.8 17.508l17.95 6.327c2.06-4.414 5.74-8.681 10.74-12.653 5.15-3.973 12.21-5.885 21.19-5.885 8.97 0 15.15 2.207 19.42 6.62 4.27 4.414 6.47 10.446 6.47 18.391v.589c0 3.089-1.03 5.149-3.23 6.326l.44.294Zm3.23 31.338c0 5.15-1.32 10.005-3.97 14.566-2.65 4.708-6.47 8.386-11.62 11.329-5.15 2.942-11.48 4.413-18.98 4.413s-13.68-1.618-18.54-5.002c-4.85-3.384-7.35-8.239-7.35-14.86 0-4.855 1.32-8.533 3.82-11.328 2.65-2.796 6.03-4.856 10.3-6.327 4.27-1.471 8.83-2.501 13.68-3.09 2.06-.294 4.71-.588 7.95-1.029 3.23-.442 6.62-.883 10.15-1.472 3.53-.588 6.62-1.177 9.27-2.06 2.65-.735 4.41-1.618 5.29-2.648v17.508ZM1791.19 173.536c0 7.209 1.62 13.094 5 17.802 3.39 4.708 7.51 8.239 12.66 10.446 5.15 2.207 10.3 3.384 15.59 3.384 3.53 0 6.48-.294 8.68-.736 2.21-.441 4.12-1.03 5.3-1.471l-3.83-16.92c-.73.147-1.91.295-3.23.589-1.33.294-3.09.294-5.15.294-2.8 0-5.45-.441-7.8-1.324-2.5-.883-4.56-2.648-6.03-5.297-1.62-2.648-2.36-6.62-2.36-11.917v-71.65h26.19V80.699h-26.19V51.274h-18.83v29.425h-18.54v16.037h18.54v76.8ZM1883.59 80.699h-18.84v122.85h18.84V80.699ZM1874.32 34.648c-3.68 0-6.77 1.324-9.42 3.825-2.65 2.502-3.97 5.591-3.97 8.975 0 3.384 1.32 6.474 3.97 8.975 2.65 2.501 5.74 3.825 9.42 3.825 3.68 0 6.77-1.177 9.41-3.825 2.65-2.648 3.98-5.59 3.98-8.975 0-3.384-1.33-6.473-3.98-8.974-2.64-2.502-5.73-3.826-9.41-3.826ZM1997.17 87.025c-8.39-5.296-18.1-7.945-29.13-7.945-11.04 0-20.75 2.649-29.13 7.945-8.39 5.297-14.86 12.653-19.57 22.216-4.71 9.564-7.06 20.745-7.06 33.545s2.35 23.835 7.06 33.251c4.71 9.563 11.18 16.919 19.57 22.216 8.38 5.296 18.09 7.945 29.13 7.945 11.03 0 20.74-2.649 29.13-7.945 8.38-5.297 14.86-12.653 19.57-22.216 4.7-9.563 7.06-20.598 7.06-33.251 0-12.653-2.36-23.981-7.06-33.545-4.71-9.563-11.19-16.92-19.57-22.216Zm3.68 78.566c-2.65 7.062-6.62 12.653-12.07 17.066-5.44 4.267-12.36 6.474-20.74 6.474-8.39 0-15.3-2.207-20.75-6.474-5.44-4.266-9.41-10.004-12.06-17.066-2.65-7.062-3.97-14.713-3.97-22.805s1.32-15.889 3.97-22.952c2.65-7.062 6.62-12.8 12.06-17.213 5.45-4.414 12.36-6.621 20.75-6.621 8.38 0 15.3 2.207 20.74 6.621 5.45 4.413 9.42 10.151 12.07 17.213 2.64 7.063 3.97 14.713 3.97 22.952 0 8.239-1.33 15.89-3.97 22.805ZM2130.02 84.23c-6.18-3.384-13.53-5.002-21.77-5.002-9.27 0-16.77 1.912-22.66 5.738-5.88 3.825-10.3 8.827-13.09 15.154h-1.62V80.846h-18.24V203.55h18.83v-73.858c0-7.209 1.32-13.241 4.12-18.244 2.65-5.002 6.47-8.827 11.18-11.475 4.71-2.649 10-3.973 16.04-3.973 8.68 0 15.59 2.648 20.59 8.092 5.01 5.444 7.51 12.947 7.51 22.658v76.8h18.83v-77.977c0-10.446-1.77-19.127-5.15-25.895-3.53-6.915-8.24-11.917-14.57-15.3v-.148ZM2256.99 186.924h1.03v16.625h18.84V122.63c0-9.71-1.62-17.508-4.86-23.393-3.24-5.885-7.21-10.152-12.06-13.094-4.86-2.943-9.86-4.856-15.01-5.738-5.15-.883-9.71-1.472-13.68-1.472-6.18 0-12.51.883-18.83 2.501-6.33 1.619-12.22 4.561-17.51 8.828-5.3 4.12-9.71 10.005-12.8 17.508l17.95 6.327c2.06-4.414 5.73-8.681 10.74-12.653 5.15-3.973 12.21-5.885 21.18-5.885 8.98 0 15.16 2.207 19.42 6.62 4.27 4.414 6.48 10.446 6.48 18.391v.589c0 3.089-1.03 5.149-3.24 6.326-2.21 1.177-5.59 2.06-10.3 2.648-4.71.442-10.74 1.177-18.24 2.207-5.74.736-11.33 1.766-17.07 2.943-5.59 1.324-10.74 3.089-15.45 5.591-4.7 2.501-8.38 5.885-11.18 10.298-2.79 4.414-4.12 10.152-4.12 17.214 0 7.945 1.91 14.86 5.59 20.451 3.68 5.591 8.83 9.857 15.16 12.8 6.32 2.942 13.39 4.414 21.18 4.414 7.21 0 13.24-1.03 18.1-3.237 5-2.06 8.97-4.708 11.92-7.798 2.94-3.09 5.15-5.885 6.32-8.533l.44.441Zm-14.71-1.912c-5.15 2.942-11.47 4.413-18.98 4.413-7.5 0-13.68-1.618-18.54-5.002-4.85-3.384-7.35-8.239-7.35-14.86 0-4.855 1.32-8.533 3.82-11.328 2.65-2.796 6.04-4.856 10.3-6.327 4.27-1.471 8.83-2.501 13.69-3.09 2.06-.294 4.7-.588 7.94-1.029 3.24-.442 6.62-.883 10.15-1.472 3.53-.588 6.62-1.177 9.27-2.06 2.65-.735 4.41-1.618 5.3-2.648v17.214c0 5.149-1.33 10.005-3.97 14.566-2.65 4.708-6.48 8.386-11.63 11.328v.295ZM2330.11 39.798h-18.83v163.751h18.83V39.798ZM2450.46 39.798h-19.86v163.751h19.86V39.798ZM2506.37 129.692c0-7.209 1.33-13.241 4.12-18.244 2.65-5.002 6.47-8.827 11.18-11.476 4.71-2.648 10.01-3.972 16.04-3.972 8.68 0 15.59 2.648 20.6 8.092 5 5.444 7.5 12.947 7.5 22.657v76.8h18.83v-77.977c0-10.446-1.76-19.126-5.15-25.894-3.53-6.915-8.24-11.917-14.56-15.301-6.18-3.384-13.54-5.002-21.78-5.002-9.27 0-16.77 1.912-22.65 5.738-5.89 3.825-10.3 8.827-13.1 15.154h-1.62V80.993h-18.24V203.55h18.83v-73.857ZM2700.43 148.23c-5.44-5.444-13.53-9.563-24.57-12.212l-18.24-4.413c-7.21-1.766-12.66-4.12-16.04-6.768-3.38-2.648-5.15-6.474-5.15-11.182 0-5.296 2.5-9.71 7.51-13.094 5-3.384 11.18-5.15 18.68-5.15 5.44 0 10 .883 13.54 2.649 3.53 1.765 6.32 3.972 8.38 6.62 2.06 2.649 3.68 5.444 4.71 8.24l16.92-4.856c-2.94-8.68-7.8-15.742-14.86-21.186-6.92-5.296-16.48-7.945-28.69-7.945-8.68 0-16.33 1.472-23.1 4.561-6.77 3.09-12.21 7.21-16.04 12.506-3.82 5.297-5.88 11.476-5.88 18.391 0 8.533 2.65 15.595 7.94 21.186 5.3 5.591 13.54 9.71 24.72 12.359l20.45 4.855c6.18 1.471 10.74 3.678 13.68 6.473 2.95 2.943 4.42 6.474 4.42 10.741 0 5.296-2.65 9.857-7.8 13.535-5.15 3.678-12.21 5.591-21.04 5.591-7.8 0-13.98-1.618-18.68-5.002-4.71-3.384-7.95-8.239-9.71-14.86l-17.95 4.414c2.2 10.446 7.35 18.391 15.59 23.834 8.24 5.444 18.54 8.092 31.05 8.092 9.56 0 17.95-1.618 25.15-4.855 7.21-3.237 12.8-7.651 16.78-13.094 3.97-5.591 6.03-11.77 6.03-18.832 0-8.534-2.65-15.596-8.09-21.039l.29.441ZM2745.31 173.536c0 7.209 1.62 13.094 5 17.802s7.5 8.239 12.65 10.446c5.15 2.207 10.3 3.384 15.6 3.384 3.53 0 6.47-.294 8.68-.736 2.21-.441 4.12-1.03 5.3-1.471l-3.83-16.92c-.74.147-1.91.295-3.24.589-1.32.294-3.09.294-5.15.294-2.79 0-5.44-.441-7.79-1.324-2.51-.883-4.56-2.648-6.04-5.297-1.61-2.648-2.35-6.62-2.35-11.917v-71.65h26.19V80.699h-26.19V51.274h-18.83v29.425h-18.54v16.037h18.54v76.8ZM2828.43 34.648c-3.67 0-6.76 1.324-9.41 3.825-2.65 2.502-3.97 5.591-3.97 8.975 0 3.384 1.32 6.474 3.97 8.975 2.65 2.501 5.74 3.825 9.41 3.825 3.68 0 6.77-1.177 9.42-3.825 2.65-2.648 3.97-5.59 3.97-8.975 0-3.384-1.32-6.473-3.97-8.974-2.65-2.502-5.74-3.826-9.42-3.826ZM2837.7 80.699h-18.83v122.85h18.83V80.699ZM2880.66 173.536c0 7.209 1.62 13.094 5.01 17.802 3.38 4.708 7.5 8.239 12.65 10.446 5.15 2.207 10.3 3.384 15.59 3.384 3.54 0 6.48-.294 8.68-.736 2.21-.441 4.12-1.03 5.3-1.471l-3.82-16.92c-.74.147-1.92.295-3.24.589-1.33.294-3.09.294-5.15.294-2.8 0-5.44-.441-7.8-1.324-2.5-.883-4.56-2.648-6.03-5.297-1.62-2.648-2.35-6.62-2.35-11.917v-71.65h26.18V80.699h-26.18V51.274h-18.84v29.425h-18.53v16.037h18.53v76.8ZM3030.29 182.805h1.33v20.744h18.83V80.699h-18.83v72.68c0 7.651-1.62 13.977-5.01 18.98-3.38 5.002-7.5 8.68-12.36 11.034-4.85 2.354-9.71 3.678-14.41 3.678-7.8 0-14.28-2.648-19.28-7.945-5-5.296-7.5-12.505-7.5-21.48V80.699h-18.83v77.977c0 10.446 1.76 19.126 5.15 25.894 3.38 6.915 8.09 11.917 14.12 15.301 6.03 3.384 12.8 5.15 20.45 5.15 9.27 0 16.92-2.207 23.1-6.474 6.03-4.267 10.59-9.71 13.39-15.89l-.15.148ZM3093.26 173.536c0 7.209 1.62 13.094 5 17.802 3.39 4.708 7.51 8.239 12.66 10.446 5.15 2.207 10.29 3.384 15.59 3.384 3.53 0 6.47-.294 8.68-.736 2.21-.441 4.12-1.03 5.3-1.471l-3.83-16.92c-.73.147-1.91.295-3.23.589-1.33.294-3.09.294-5.15.294-2.8 0-5.45-.441-7.8-1.324-2.5-.883-4.56-2.648-6.03-5.297-1.62-2.648-2.36-6.62-2.36-11.917v-71.65h26.19V80.699h-26.19V51.274h-18.83v29.425h-18.54v16.037h18.54v76.8ZM3251.13 92.763c-5.15-4.708-10.74-8.239-17.07-10.299-6.33-2.06-12.5-3.236-18.98-3.236-11.03 0-20.74 2.648-28.98 8.092-8.24 5.443-14.71 12.947-19.42 22.51-4.71 9.563-6.92 20.745-6.92 33.251 0 12.505 2.36 23.54 6.92 33.103 4.56 9.563 11.18 16.772 19.71 22.069 8.54 5.297 18.69 7.798 30.6 7.798 8.24 0 15.75-1.324 22.51-3.826 6.63-2.648 12.22-6.179 16.78-10.887 4.56-4.708 7.79-10.152 9.71-16.331l-18.25-5.149c-1.61 4.266-3.82 7.797-6.76 10.74-2.95 2.942-6.48 5.002-10.45 6.326-3.97 1.472-8.53 2.06-13.54 2.06-7.65 0-14.27-1.618-20.01-5.002-5.73-3.384-10.29-8.239-13.53-14.566-2.94-5.738-4.27-12.947-4.56-21.039h89.01v-7.945c0-11.476-1.47-21.186-4.56-28.984-3.09-7.797-7.06-14.124-12.21-18.979v.294Zm-72.09 39.577c.29-5.738 1.61-11.034 4.12-16.184 2.94-5.885 7.06-10.74 12.65-14.418 5.44-3.678 11.92-5.59 19.42-5.59 6.77 0 12.8 1.618 17.8 4.707 5 3.09 8.98 7.504 11.62 12.947 2.8 5.444 4.12 11.623 4.12 18.538h-69.73ZM3414.73 96.736V80.699h-27.51V68.193c0-6.032 1.32-10.74 4.12-13.83s7.21-4.708 13.54-4.708c2.64 0 4.85.294 6.62.736 1.76.441 2.94.883 3.97 1.177l5.44-16.331c-1.47-.589-3.68-1.324-6.62-2.06S3407.52 32 3402.96 32c-5.88 0-11.47 1.177-16.77 3.531-5.3 2.354-9.56 5.885-12.95 10.593-3.23 4.708-5 10.593-5 17.655V80.7h-19.86v16.037h19.86v106.813h18.83V96.736h27.66ZM3534.79 176.037c4.7-9.563 7.06-20.598 7.06-33.251 0-12.653-2.36-23.981-7.06-33.545-4.71-9.563-11.19-16.92-19.57-22.216-8.39-5.296-18.1-7.945-29.13-7.945-11.04 0-20.75 2.649-29.13 7.945-8.39 5.297-14.86 12.653-19.57 22.216-4.71 9.564-7.06 20.745-7.06 33.545s2.35 23.835 7.06 33.251c4.71 9.563 11.18 16.919 19.57 22.216 8.38 5.296 18.09 7.945 29.13 7.945 11.03 0 20.74-2.649 29.13-7.945 8.38-5.297 14.86-12.653 19.57-22.216Zm-15.75-10.446c-2.65 7.062-6.62 12.653-12.06 17.066-5.44 4.267-12.36 6.474-20.75 6.474-8.38 0-15.3-2.207-20.74-6.474-5.44-4.266-9.42-10.004-12.07-17.066-2.64-7.062-3.97-14.713-3.97-22.805s1.33-15.889 3.97-22.952c2.65-7.062 6.63-12.8 12.07-17.213 5.44-4.414 12.36-6.621 20.74-6.621 8.39 0 15.31 2.207 20.75 6.621 5.44 4.413 9.41 10.151 12.06 17.213 2.65 7.063 3.98 14.713 3.98 22.952 0 8.239-1.33 15.89-3.98 22.805ZM3622.03 78.786c-7.35 0-13.98 1.913-19.86 5.738-5.89 3.825-9.86 8.68-12.21 14.86h-1.33V80.846h-18.24v122.703h18.83v-77.682c0-5.591 1.33-10.446 3.98-14.86 2.64-4.267 6.32-7.798 11.03-10.299 4.71-2.501 10-3.678 15.89-3.678 2.5 0 4.85.147 7.21.588 2.35.442 3.68.589 4.41.736V79.228c-1.03 0-2.65-.148-4.71-.295h-5.15l.15-.147ZM1596.1 382.896h-87.24v-72.827h-19.87v163.752h19.87v-73.269h87.24v73.269h19.86V310.069h-19.86v72.827ZM1738.67 362.887c-5.15-4.708-10.74-8.239-17.07-10.299-6.33-2.059-12.51-3.236-18.98-3.236-11.03 0-20.74 2.648-28.98 8.092-8.24 5.443-14.72 12.947-19.42 22.51-4.71 9.563-6.92 20.745-6.92 33.25 0 12.506 2.36 23.541 6.92 33.104 4.56 9.563 11.18 16.772 19.71 22.069 8.53 5.296 18.69 7.798 30.6 7.798 8.24 0 15.75-1.325 22.51-3.826 6.62-2.648 12.22-6.179 16.78-10.887 4.56-4.708 7.79-10.152 9.71-16.331l-18.25-5.15c-1.62 4.267-3.82 7.798-6.76 10.741-2.95 2.942-6.48 5.002-10.45 6.326-3.97 1.471-8.53 2.06-13.54 2.06-7.65 0-14.27-1.618-20.01-5.002-5.73-3.384-10.29-8.239-13.53-14.566-2.94-5.738-4.27-12.947-4.56-21.039h89.01v-7.945c0-11.476-1.47-21.186-4.56-28.984-3.09-7.797-7.06-14.124-12.21-18.979v.294Zm-72.09 39.577c.29-5.738 1.61-11.034 4.11-16.184 2.95-5.885 7.07-10.74 12.66-14.418 5.44-3.678 11.91-5.591 19.42-5.591 6.77 0 12.8 1.619 17.8 4.708 5 3.09 8.98 7.504 11.62 12.947 2.8 5.444 4.12 11.623 4.12 18.538h-69.73ZM1859.75 356.561c-4.85-2.943-9.86-4.855-15.01-5.738s-9.71-1.471-13.68-1.471c-6.18 0-12.5.882-18.83 2.501-6.33 1.618-12.21 4.561-17.51 8.827-5.3 4.12-9.71 10.005-12.8 17.508l17.95 6.327c2.06-4.414 5.74-8.681 10.74-12.653 5.15-3.972 12.21-5.885 21.19-5.885 8.97 0 15.15 2.207 19.42 6.621 4.26 4.413 6.47 10.446 6.47 18.39v.589c0 3.09-1.03 5.149-3.24 6.326-2.2 1.177-5.59 2.06-10.29 2.649-4.71.441-10.75 1.177-18.25 2.207-5.74.735-11.33 1.765-17.07 2.942-5.59 1.324-10.74 3.09-15.44 5.591-4.71 2.501-8.39 5.885-11.19 10.299-2.79 4.413-4.11 10.151-4.11 17.213 0 7.945 1.91 14.86 5.59 20.451 3.67 5.591 8.82 9.858 15.15 12.8 6.33 2.943 13.39 4.414 21.19 4.414 7.21 0 13.24-1.03 18.09-3.237 5.01-2.06 8.98-4.708 11.92-7.798 2.94-3.089 5.15-5.885 6.33-8.533h1.03v16.625h18.83v-80.919c0-9.711-1.62-17.508-4.86-23.393-3.23-5.885-7.21-10.152-12.06-13.095l.44.442Zm-2.06 72.827c0 5.15-1.32 10.005-3.97 14.566-2.65 4.708-6.48 8.386-11.62 11.329-5.15 2.942-11.48 4.413-18.98 4.413-7.51 0-13.69-1.618-18.54-5.002-4.86-3.384-7.36-8.239-7.36-14.86 0-4.855 1.33-8.533 3.83-11.328 2.65-2.796 6.03-4.856 10.3-6.327 4.26-1.471 8.82-2.501 13.68-3.089 2.06-.295 4.71-.589 7.94-1.03 3.24-.442 6.62-.883 10.16-1.472 3.53-.588 6.62-1.177 9.26-2.059 2.65-.736 4.42-1.619 5.3-2.649v17.508ZM1929.93 310.069h-18.83v163.752h18.83V310.069ZM2013.2 456.754c-1.32.294-3.09.294-5.15.294-2.79 0-5.44-.441-7.79-1.324-2.51-.883-4.56-2.648-6.04-5.296-1.61-2.649-2.35-6.621-2.35-11.918v-71.65h26.19v-16.037h-26.19v-29.425h-18.83v29.425h-18.54v16.037h18.54v76.8c0 7.209 1.62 13.094 5 17.802s7.5 8.239 12.65 10.446c5.15 2.207 10.3 3.384 15.6 3.384 3.53 0 6.47-.294 8.68-.736 2.21-.441 4.12-1.03 5.3-1.471l-3.83-16.92c-.74.148-1.91.295-3.24.589ZM2127.67 354.354c-6.33-3.384-13.68-5.002-21.92-5.002-9.71 0-17.36 1.912-23.1 5.591-5.74 3.825-10.15 8.827-12.95 15.154h-1.62v-60.175h-18.83v163.752h18.83v-73.858c0-7.209 1.48-13.241 4.27-18.244 2.8-5.002 6.62-8.827 11.48-11.475 4.85-2.649 10.44-3.973 16.62-3.973 8.83 0 15.89 2.648 20.89 8.092 5.01 5.444 7.51 12.947 7.51 22.658v76.8h18.83v-77.977c0-10.594-1.77-19.274-5.3-26.042-3.53-6.768-8.38-11.917-14.71-15.301ZM2320.99 356.561c-4.85-2.943-9.85-4.855-15-5.738s-9.71-1.471-13.69-1.471c-6.18 0-12.5.882-18.83 2.501-6.32 1.618-12.21 4.561-17.51 8.827-5.29 4.12-9.71 10.005-12.8 17.508l17.95 6.327c2.06-4.414 5.74-8.681 10.74-12.653 5.15-3.972 12.21-5.885 21.19-5.885 8.97 0 15.15 2.207 19.42 6.621 4.27 4.413 6.47 10.446 6.47 18.39v.589c0 3.09-1.03 5.149-3.23 6.326-2.21 1.177-5.59 2.06-10.3 2.649-4.71.441-10.74 1.177-18.25 2.207-5.73.735-11.32 1.765-17.06 2.942-5.59 1.324-10.74 3.09-15.45 5.591-4.71 2.501-8.39 5.885-11.18 10.299-2.8 4.413-4.12 10.151-4.12 17.213 0 7.945 1.91 14.86 5.59 20.451 3.68 5.591 8.83 9.858 15.15 12.8 6.33 2.943 13.39 4.414 21.19 4.414 7.21 0 13.24-1.03 18.1-3.237 5-2.06 8.97-4.708 11.91-7.798 2.95-3.089 5.15-5.885 6.33-8.533h1.03v16.625h18.83v-80.919c0-9.711-1.62-17.508-4.85-23.393-3.24-5.885-7.21-10.152-12.07-13.095l.44.442Zm-2.06 72.827c0 5.15-1.32 10.005-3.97 14.566-2.65 4.708-6.47 8.386-11.62 11.329-5.15 2.942-11.48 4.413-18.98 4.413s-13.68-1.618-18.54-5.002c-4.85-3.384-7.36-8.239-7.36-14.86 0-4.855 1.33-8.533 3.83-11.328 2.65-2.796 6.03-4.856 10.3-6.327 4.27-1.471 8.83-2.501 13.68-3.089 2.06-.295 4.71-.589 7.95-1.03 3.23-.442 6.62-.883 10.15-1.472 3.53-.588 6.62-1.177 9.27-2.059 2.65-.736 4.41-1.619 5.29-2.649v17.508ZM2449.88 354.501c-6.18-3.384-13.54-5.002-21.78-5.002-9.27 0-16.77 1.912-22.66 5.738-5.88 3.825-10.29 8.827-13.09 15.154h-1.62v-19.274h-18.24v122.851h18.83V400.11c0-7.209 1.32-13.241 4.12-18.243 2.65-5.003 6.47-8.828 11.18-11.476 4.71-2.648 10.01-3.973 16.04-3.973 8.68 0 15.59 2.649 20.6 8.092 5 5.444 7.5 12.948 7.5 22.658v76.8h18.83v-77.977c0-10.446-1.76-19.127-5.15-25.894-3.53-6.915-8.24-11.918-14.56-15.302v-.294ZM2588.03 370.538h-1.62c-1.32-2.06-3.38-4.855-5.74-8.239-2.5-3.384-6.03-6.327-10.74-8.975-4.7-2.648-11.03-3.972-18.98-3.972-10.29 0-19.42 2.648-27.36 7.797-7.95 5.15-13.98 12.506-18.54 21.922-4.56 9.416-6.62 20.745-6.62 33.545s2.21 24.276 6.62 33.839c4.41 9.563 10.59 16.92 18.39 22.069 7.8 5.149 16.92 7.798 27.07 7.798 7.95 0 14.27-1.324 18.98-3.973 4.71-2.648 8.39-5.59 10.89-8.974 2.5-3.384 4.56-6.18 5.88-8.387h2.21v18.833h18.24V310.069h-18.83v60.469h.15Zm-3.83 66.354c-2.64 7.062-6.62 12.506-11.91 16.478-5.3 3.972-11.63 5.885-19.28 5.885s-14.41-2.06-19.71-6.326c-5.3-4.12-9.27-9.858-11.92-16.92-2.65-7.062-3.97-15.007-3.97-23.834 0-8.828 1.32-16.479 3.97-23.393 2.65-6.915 6.62-12.506 11.92-16.479 5.3-4.119 11.92-6.179 20.01-6.179 8.09 0 14.12 1.913 19.42 5.738 5.3 3.825 9.12 9.269 11.77 16.184 2.65 6.915 3.97 15.007 3.97 24.129 0 9.121-1.32 17.508-4.12 24.57l-.15.147ZM2748.84 333.904c7.94-5.003 17.06-7.504 26.92-7.504 5.45 0 10.6.736 15.6 2.207 5 1.471 9.56 3.678 13.68 6.621 4.12 2.942 7.65 6.62 10.59 10.887 2.95 4.267 5.01 9.269 6.18 15.007h19.86c-1.47-8.386-4.26-15.89-8.09-22.51-3.97-6.621-8.82-12.212-14.71-16.773-5.88-4.561-12.51-8.092-19.71-10.593-7.21-2.354-15.01-3.531-23.25-3.531-13.98 0-26.34 3.384-37.22 10.299-10.89 6.768-19.42 16.478-25.6 29.131-6.18 12.653-9.42 27.513-9.42 44.726 0 17.214 3.09 32.221 9.42 44.727 6.32 12.506 14.86 22.216 25.6 29.131 10.88 6.768 23.24 10.299 37.22 10.299 8.24 0 16.04-1.177 23.25-3.531a65.066 65.066 0 0 0 19.71-10.446c5.89-4.561 10.74-10.152 14.71-16.773 3.98-6.62 6.62-14.124 8.09-22.51h-19.86c-1.17 5.591-3.23 10.593-6.18 15.007-2.94 4.414-6.47 7.945-10.59 10.887-4.12 2.943-8.68 5.15-13.68 6.621s-10.3 2.207-15.6 2.207c-9.86 0-18.83-2.501-26.92-7.504-8.09-5.002-14.42-12.358-19.13-22.216-4.71-9.857-7.06-21.774-7.06-35.899 0-14.124 2.35-26.188 7.06-35.898 4.71-9.711 11.04-17.067 19.13-22.217v.148ZM2946.58 356.561c-4.86-2.943-9.86-4.855-15.01-5.738s-9.71-1.471-13.68-1.471c-6.18 0-12.51.882-18.84 2.501-6.32 1.618-12.21 4.561-17.5 8.827-5.3 4.12-9.71 10.005-12.8 17.508l17.94 6.327c2.06-4.414 5.74-8.681 10.74-12.653 5.15-3.972 12.22-5.885 21.19-5.885 8.98 0 15.16 2.207 19.42 6.621 4.27 4.413 6.48 10.446 6.48 18.39v.589c0 3.09-1.03 5.149-3.24 6.326-2.21 1.177-5.59 2.06-10.3 2.649-4.71.441-10.74 1.177-18.24 2.207-5.74.735-11.33 1.765-17.07 2.942-5.59 1.324-10.74 3.09-15.45 5.591-4.71 2.501-8.39 5.885-11.18 10.299-2.8 4.413-4.12 10.151-4.12 17.213 0 7.945 1.91 14.86 5.59 20.451 3.68 5.591 8.83 9.858 15.16 12.8 6.32 2.943 13.38 4.414 21.18 4.414 7.21 0 13.24-1.03 18.1-3.237 5-2.06 8.97-4.708 11.91-7.798 2.95-3.089 5.15-5.885 6.33-8.533h1.03v16.625h18.83v-80.919c0-9.711-1.61-17.508-4.85-23.393-3.24-5.885-7.21-10.152-12.07-13.095l.45.442Zm-2.06 72.827c0 5.15-1.33 10.005-3.98 14.566-2.65 4.708-6.47 8.386-11.62 11.329-5.15 2.942-11.48 4.413-18.98 4.413s-13.68-1.618-18.54-5.002c-4.85-3.384-7.35-8.239-7.35-14.86 0-4.855 1.32-8.533 3.82-11.328 2.65-2.796 6.03-4.856 10.3-6.327 4.27-1.471 8.83-2.501 13.68-3.089 2.06-.295 4.71-.589 7.95-1.03 3.23-.442 6.62-.883 10.15-1.472 3.53-.588 6.62-1.177 9.27-2.059 2.65-.736 4.41-1.619 5.3-2.649v17.508ZM3049.56 349.057c-7.35 0-13.97 1.913-19.86 5.738-5.88 3.826-9.86 8.681-12.21 14.86h-1.32v-18.538h-18.25v122.851h18.84v-77.683c0-5.591 1.32-10.446 3.97-14.86 2.65-4.266 6.32-7.797 11.03-10.299 4.71-2.501 10.01-3.678 15.89-3.678 2.5 0 4.86.147 7.21.589 2.36.441 3.68.588 4.41.735v-19.126c-1.03 0-2.64-.147-4.7-.294h-5.15l.14-.295ZM3163.59 362.887c-5.15-4.708-10.74-8.239-17.07-10.299-6.32-2.059-12.5-3.236-18.98-3.236-11.03 0-20.74 2.648-28.98 8.092-8.24 5.443-14.71 12.947-19.42 22.51-4.71 9.563-6.92 20.745-6.92 33.25 0 12.506 2.36 23.541 6.92 33.104 4.56 9.563 11.18 16.772 19.71 22.069 8.54 5.296 18.69 7.798 30.6 7.798 8.24 0 15.75-1.325 22.52-3.826 6.62-2.648 12.21-6.179 16.77-10.887 4.56-4.708 7.8-10.152 9.71-16.331l-18.25-5.15c-1.61 4.267-3.82 7.798-6.76 10.741-2.95 2.942-6.48 5.002-10.45 6.326-3.97 1.471-8.53 2.06-13.54 2.06-7.65 0-14.27-1.618-20-5.002-5.74-3.384-10.3-8.239-13.54-14.566-2.94-5.738-4.27-12.947-4.56-21.039h89.01v-7.945c0-11.476-1.47-21.186-4.56-28.984-3.09-7.797-7.06-14.124-12.21-18.979v.294Zm-72.09 39.577c.29-5.738 1.61-11.034 4.12-16.184 2.94-5.885 7.06-10.74 12.65-14.418 5.44-3.678 11.92-5.591 19.42-5.591 6.77 0 12.8 1.619 17.8 4.708 5 3.09 8.98 7.504 11.62 12.947 2.8 5.444 4.12 11.623 4.12 18.538h-69.73ZM3294.82 400.552h73.86v-17.656h-73.86v-55.319h79.01v-17.508h-98.87v163.752h100.19v-17.656h-80.33v-55.613ZM3480.06 350.97l-29.43 50.17-29.42-50.17h-21.78l38.99 61.352-38.99 61.499h21.78l29.42-47.669 29.43 47.669h21.77l-39.72-61.499 39.72-61.352h-21.77ZM3554.06 372.009c5.45-3.825 11.92-5.738 19.28-5.738 8.38 0 15 2.207 19.86 6.474 5 4.414 8.09 9.269 9.56 14.86h18.83c-1.03-7.651-3.82-14.419-8.24-20.157-4.41-5.738-10.15-10.299-17.06-13.388-6.92-3.237-14.72-4.855-23.4-4.855-11.03 0-20.74 2.648-28.98 8.092-8.24 5.443-14.71 12.947-19.42 22.51-4.56 9.563-6.92 20.598-6.92 33.103 0 12.506 2.21 23.099 6.77 32.662 4.42 9.564 10.89 17.067 19.13 22.511 8.24 5.443 18.24 8.092 29.72 8.092 9.12 0 17.06-1.766 23.83-5.15 6.92-3.384 12.36-7.945 16.48-13.683 4.12-5.737 6.77-12.358 7.95-19.567h-18.84c-1.17 4.413-3.09 8.239-5.88 11.476-2.8 3.236-6.18 5.59-10.15 7.356-3.98 1.765-8.39 2.501-13.39 2.501-7.51 0-13.98-1.913-19.42-5.885-5.59-3.825-9.71-9.416-12.8-16.331-2.94-7.062-4.56-15.301-4.56-24.864 0-9.564 1.47-17.361 4.56-24.276 3.09-6.915 7.35-12.212 12.94-16.037l.15.294ZM3734.88 362.887c-5.15-4.708-10.74-8.239-17.07-10.299-6.33-2.059-12.5-3.236-18.98-3.236-11.03 0-20.74 2.648-28.98 8.092-8.24 5.443-14.71 12.947-19.42 22.51-4.71 9.563-6.92 20.745-6.92 33.25 0 12.506 2.36 23.541 6.92 33.104 4.56 9.563 11.18 16.772 19.71 22.069 8.54 5.296 18.69 7.798 30.6 7.798 8.24 0 15.75-1.325 22.51-3.826 6.63-2.648 12.22-6.179 16.78-10.887 4.56-4.708 7.79-10.152 9.71-16.331l-18.25-5.15c-1.61 4.267-3.82 7.798-6.76 10.741-2.95 2.942-6.48 5.002-10.45 6.326-3.97 1.471-8.53 2.06-13.54 2.06-7.65 0-14.27-1.618-20-5.002-5.74-3.384-10.3-8.239-13.54-14.566-2.94-5.738-4.27-12.947-4.56-21.039h89.01v-7.945c0-11.476-1.47-21.186-4.56-28.984-3.09-7.797-7.06-14.124-12.21-18.979v.294Zm-72.09 39.577c.29-5.738 1.61-11.034 4.12-16.184 2.94-5.885 7.06-10.74 12.65-14.418 5.44-3.678 11.92-5.591 19.42-5.591 6.77 0 12.8 1.619 17.8 4.708 5 3.09 8.98 7.504 11.62 12.947 2.8 5.444 4.12 11.623 4.12 18.538h-69.73ZM3799.17 310.069h-18.83v163.752h18.83V310.069ZM3852.58 310.069h-18.83v163.752h18.83V310.069ZM3972.78 362.887c-5.15-4.708-10.74-8.239-17.06-10.299-6.33-2.059-12.51-3.236-18.98-3.236-11.04 0-20.75 2.648-28.99 8.092-8.24 5.443-14.71 12.947-19.42 22.51-4.71 9.563-6.91 20.745-6.91 33.25 0 12.506 2.35 23.541 6.91 33.104 4.56 9.563 11.18 16.772 19.72 22.069 8.53 5.296 18.68 7.798 30.6 7.798 8.24 0 15.74-1.325 22.51-3.826 6.62-2.648 12.21-6.179 16.77-10.887 4.56-4.708 7.8-10.152 9.71-16.331l-18.24-5.15c-1.62 4.267-3.83 7.798-6.77 10.741-2.94 2.942-6.47 5.002-10.44 6.326-3.98 1.471-8.54 2.06-13.54 2.06-7.65 0-14.27-1.618-20.01-5.002-5.74-3.384-10.3-8.239-13.54-14.566-2.94-5.738-4.26-12.947-4.56-21.039h89.02v-7.945c0-11.476-1.48-21.186-4.57-28.984-3.09-7.797-7.06-14.124-12.21-18.979v.294Zm-72.09 39.577c.3-5.738 1.62-11.034 4.12-16.184 2.94-5.885 7.06-10.74 12.65-14.418 5.45-3.678 11.92-5.591 19.42-5.591 6.77 0 12.8 1.619 17.81 4.708 5 3.09 8.97 7.504 11.62 12.947 2.79 5.444 4.12 11.623 4.12 18.538h-69.74ZM4095.78 354.501c-6.18-3.384-13.54-5.002-21.78-5.002-9.27 0-16.77 1.912-22.65 5.738-5.89 3.825-10.3 8.827-13.1 15.154h-1.62v-19.274h-18.24v122.851h18.83V400.11c0-7.209 1.33-13.241 4.12-18.243 2.65-5.003 6.47-8.828 11.18-11.476 4.71-2.648 10.01-3.973 16.04-3.973 8.68 0 15.6 2.649 20.6 8.092 5 5.444 7.5 12.948 7.5 22.658v76.8h18.83v-77.977c0-10.446-1.76-19.127-5.15-25.894-3.53-6.915-8.24-11.918-14.56-15.302v-.294ZM4180.67 372.009c5.45-3.825 11.92-5.738 19.27-5.738 8.39 0 15.01 2.207 19.87 6.474 5 4.414 8.09 9.269 9.56 14.86h18.83c-1.03-7.651-3.82-14.419-8.24-20.157-4.41-5.738-10.15-10.299-17.06-13.388-6.92-3.237-14.72-4.855-23.4-4.855-11.03 0-20.74 2.648-28.98 8.092-8.24 5.443-14.71 12.947-19.42 22.51-4.56 9.563-6.92 20.598-6.92 33.103 0 12.506 2.21 23.099 6.77 32.662 4.41 9.564 10.89 17.067 19.13 22.511 8.24 5.443 18.24 8.092 29.72 8.092 9.12 0 17.06-1.766 23.83-5.15 6.92-3.384 12.36-7.945 16.48-13.683 4.12-5.737 6.77-12.358 7.95-19.567h-18.84c-1.17 4.413-3.09 8.239-5.88 11.476-2.8 3.236-6.18 5.59-10.15 7.356-3.98 1.765-8.39 2.501-13.39 2.501-7.51 0-13.98-1.913-19.42-5.885-5.59-3.825-9.71-9.416-12.8-16.331-2.95-7.062-4.56-15.301-4.56-24.864 0-9.564 1.47-17.361 4.56-24.276 3.09-6.915 7.35-12.212 12.94-16.037l.15.294ZM4378.12 410.85c0-11.475-1.48-21.186-4.57-28.983-3.08-7.798-7.06-14.125-12.21-18.98-5.15-4.708-10.74-8.239-17.06-10.299-6.33-2.059-12.51-3.236-18.98-3.236-11.04 0-20.75 2.648-28.99 8.092-8.24 5.443-14.71 12.947-19.42 22.51-4.71 9.563-6.91 20.745-6.91 33.25 0 12.506 2.35 23.541 6.91 33.104 4.56 9.563 11.18 16.772 19.72 22.069 8.53 5.296 18.68 7.798 30.6 7.798 8.24 0 15.74-1.325 22.51-3.826 6.62-2.648 12.21-6.179 16.77-10.887 4.56-4.708 7.8-10.152 9.71-16.331l-18.24-5.15c-1.62 4.267-3.83 7.798-6.77 10.741-2.94 2.942-6.47 5.002-10.44 6.326-3.98 1.471-8.54 2.06-13.54 2.06-7.65 0-14.27-1.618-20.01-5.002-5.74-3.384-10.3-8.239-13.53-14.566-2.95-5.738-4.27-12.947-4.57-21.039h89.02v-7.945.294Zm-88.87-8.386c.3-5.738 1.62-11.034 4.12-16.184 2.94-5.885 7.06-10.74 12.65-14.418 5.45-3.678 11.92-5.591 19.42-5.591 6.77 0 12.8 1.619 17.81 4.708 5 3.09 8.97 7.504 11.62 12.947 2.8 5.444 4.12 11.623 4.12 18.538h-69.74Z"
							fill="currentColor"
						></path>
					</svg>
					<span className={styles.designSystemTitle}>Design System</span>
				</header>

				<main>{children}</main>
			</Container>
			<Footer />
		</>
	);
}
