exports.Landing = (req,res) => {
    try{
        res.status(200).render('MainPage', {
            title:'This is Masimbas website'
        })
    }
    catch(error){
        res.status(404).json({
            status:'fail',
            message: error.message
        })
    }
}

exports.Music = (req,res) => {
    try{
        res.status(200).render('MusicPage', {
            title:'Music Section'
        })
    }
    catch(error){
        res.status(404).json({
            status:'fail',
            message:error.message
        })
    }
}

exports.AboutMe = (req,res) => {
    try{
        res.status(200).render('AboutMePage', {
            title:'About Me Section'
        })
    }
    catch(error){
        res.status(404).json({
            status:'fail', 
            message:error.message
        })
    }
}