const createError = require('./createError');

function handleGetAll(model, filterFn) {
    return async (req, res) => {
        try {
            const {
                filter = {},
                page = {},
            } = req.query;
            const q = filter.q || '';
            const offset = page.offset || 0;
            const size = page.size || 10;

            let items = await model.getAll();

            if (q) {
                items = items.filter(filterFn(q));
            }

            const start = offset;
            const end = offset + size;
            const paginated = items.slice(start, end);

            res.status(200).json({
                total: items.length,
                page: {
                    offset,
                    size
                },
                data: paginated
            });
        } catch (error) {
            return res.status(500).json(error);
        }
    };
}
function handleGetById(model) {
    return async (req, res) => {
        try {
            const item = await model.getById(req.params.id);
            return res.status(200).json(item);
        } catch (error) {
            const err = createError(500, 'Internal Server Error', error.sqlMessage);
            return res.status(500).json(err);
        }
    };
}
function handleDeleteById(model) {
    return async (req, res) => {
        try {
            const item = await model.deleteById(req.params.id);
            return res.status(200).json(item);
        } catch (error) {
            const err = createError(500, 'Internal Server Error', error.sqlMessage);
            return res.status(500).json(err);
        }
    };
}
module.exports = { handleGetAll, handleGetById, handleDeleteById };
