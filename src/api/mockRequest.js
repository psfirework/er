export const mockRequest = ({data, timeout = 5000, produceError = false}) => {
    return  new Promise(
        (resolve, reject) => {
            if (produceError) {
                reject(new Error('Mock error'))
            } else {
                setTimeout(() => {
                    resolve(data);
                }, timeout)
            }
        }
    )


};