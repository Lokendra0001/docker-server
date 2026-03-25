const indexController = {
    healthCheck: (req, res) => {
        res.status(200).json({
            status: 'success',
            message: 'Server is healthy and running smoothly',
            uptime: Math.floor(process.uptime()) + ' seconds'
        });
    }
};

export default indexController;
