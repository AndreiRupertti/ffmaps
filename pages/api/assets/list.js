import assets from 'src/api/assets.json'

export default function handler(req, res) {
    res.status(200).json({ assets: assets })
  }
  