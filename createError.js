const createError = (status, title, detail) => {
    return {
        errors: [
            {
                status: status.toString(),
                title,
                detail
            }
        ]
    };
};

module.exports = createError;
