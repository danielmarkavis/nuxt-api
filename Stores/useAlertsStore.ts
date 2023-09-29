import {defineStore} from "pinia";
import {notify} from "notiwind";

type Alert = {
    title: string;
    text: string;
    type: string;
}

export const useAlertsStore = defineStore('alerts', () => {
    const alerts = ref<Array<Alert>>([]);

    const push = (title:string, text:string, type:string) => {
        alerts.value.push({
            title,
            text,
            type
        })
    }

    const success = (message:string, title:string = "Success!") => {
        push(title, message, 'success')
    }

    const error = (message:string, title:string = "Error!") => {
        push(title, message, 'error')
    }

    const clear = () => {
        alerts.value = [];
    }

    const fire = () => {
        alerts.value.forEach((alert) => {
            notify(
                {
                    group: "messages",
                    title: alert.title,
                    type: alert.type,
                    text: alert.text,
                },
                3000,
            );
        });
        clear();
    }

    return {alerts, push, success, error, clear, fire}
})