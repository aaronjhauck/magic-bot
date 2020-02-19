class Log {
    begin(str) {
        console.group(getLogString(str));
    }

    print(str) {
        console.log(getLogString(str));
    }

    error(str) {
        console.error(getLogString(`[ERROR] ${str}`)) 
    }

    end(){
        console.groupEnd();
    }

}

function getLogString(str) {
    let today = new Date();
    let date =  (today.getMonth() + 1) + '/' + today.getDate() + "/" + today.getFullYear();
    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

    return `[${date}:${time}] ${str}`;
}

module.exports = Log;