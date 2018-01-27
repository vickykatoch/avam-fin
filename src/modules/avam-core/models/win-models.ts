export interface WinInfo {
		name: string;
		top?: number;
    left?: number;
    height?: number;
    width?: number;
    taskbarIconGroup?: string;
}
export interface WinOptions {
		accelerator?: {
			devtools?: boolean,
			zoom?: boolean,
			reload?: boolean,
			reloadIgnoreCache?: boolean,
		};
		alwaysOnTop?: boolean;
		autoShow?: boolean;
		contextMenu?: boolean;
		cornerRounding?: {
			width?: number;
			height?: number;
		};
		customData?: any;
		defaultCentered?: boolean;
		defaultHeight?: number;
		defaultWidth?: number;
		defaultTop?: number;
		defaultLeft?: number;
		frame?: boolean;
		hideOnClose?: boolean;
		icon?: string;
		maxHeight?: number;
		maximizable?: boolean;
		maxWidth?: number;
		minHeight?: number;
		minimizable?: boolean;
		minWidth?: number;
		name?: string;
		opacity?: number;
		resizable?: boolean;
		resizeRegion?: {
			size?: number;
			bottomRightCorner?: number;
		};
		showTaskbarIcon?: boolean;
		saveWindowState?: boolean;
		taskbarIconGroup?: string;
		state?: string;
		url?: string;
		waitForPageLoad?: boolean;
}


export interface WinMessage {
  type : fin.OpenFinWindowEventType;

}
