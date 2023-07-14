import { Box, Link, Typography } from "@mui/material"
import "./footer.css"
export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        padding: "20px 0",
        borderTop: "1px solid black",
        marginTop: "30px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "10px",
        }}
      >
        <Link
          href="https://www.facebook.com/matirastelli"
          underline="none"
          target="_blank"
          rel="noopener"
        >
          <img src="/icons/facebook.png" alt="facebok" />
        </Link>
        <Link
          href="https://github.com/Matias-Rastelli"
          underline="none"
          target="_blank"
          rel="noopener"
        >
          <img src="/icons/github.png" alt="github" />
        </Link>
        <Link
          href="https://www.instagram.com/mati.oxa"
          underline="none"
          target="_blank"
          rel="noopener"
        >
          <img src="/icons/instagram.png" alt="instagram" />
        </Link>
        <Link
          href="https://ar.linkedin.com/in/matias-rastelli-9a69a9253"
          underline="none"
          target="_blank"
          rel="noopener"
        >
          <img src="/icons/linkedin.png" alt="linkedin" />
        </Link>
        <Link
          href="https://api.whatsapp.com/send?phone=5492615949405&text=Hola,%20vi%20tu%20trabajo%20en%20Coderhouse%20y%20quisiera%20hablarte..."
          underline="none"
          target="_blank"
          rel="noopener"
        >
          <img src="/icons/wsp.png" alt="wsp" />
        </Link>
      </Box>
      <Typography variant="body">
        ® TODOS LOS DERECHOS RESERVADOS - MATIAS RASTELLI
      </Typography>
    </Box>
  )
}
