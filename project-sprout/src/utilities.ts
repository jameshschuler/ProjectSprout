import { ToastType } from "./types/ToastType";

/**
 * 
 * @param text 
 * @param type 
 * @param duration 
 * @param isRounded 
 */
export const showToast = (text: string, type: ToastType, duration: number = 4000, isRounded: boolean = false) => {
    M.toast({
        html: text,
        classes: `${type.toString()} ${isRounded && "rounded"}`,
        displayLength: duration
    });
}