import rateLimit from 'express-rate-limit';

export const analyticsLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 5,
    keyGenerator: (req) => {
        return req.user.id.toString();
    },
    standardHeaders: true,
    legacyHeaders: false,

    handler: (req, res) => {
        return res.status(429).json({
            success: false,
            message: "Rate Limit Exceeded"
        })
    }
})