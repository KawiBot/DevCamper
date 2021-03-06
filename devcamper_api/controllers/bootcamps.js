// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
//@access   Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Get all bootcamps" });
};

// @desc    Get a single bootcamps
// @route   GET /api/v1/bootcamps/:id
//@access   Public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Get a bootcamp ${req.params.id}` });
};

// @desc    Create a new bootcamp
// @route   POST /api/v1/bootcamps
//@access   Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Create a new bootcamp" });
};

// @desc    Update a bootcamp
// @route   PUT /api/v1/bootcamps/:id
//@access   Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update a bootcamp ${req.params.id}` });
};

// @desc    Delete a bootcamp
// @route   DELETE /api/v1/bootcamps/:id
//@access   Private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete a bootcamp ${req.params.id}` });
};
