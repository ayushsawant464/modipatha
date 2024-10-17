import React, { useState } from 'react';
import { Container, Box, Typography } from '@mui/material';

const BlogPage = () => {
  const [charCount, setCharCount] = useState(0);

  // Handler for text area input
  const handleTextChange = (e) => {
    setCharCount(e.target.value.length);
  };

  return (
    <Container maxWidth="lg">
      {/* Blog Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', padding: '16px', backgroundColor: '#f5f5f5', mb: 4 }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#323232" }}>
          The Modi Script: History and Origin
        </Typography>
      </Box>

      {/* Blog Content */}
      <Box mb={4}>
        <Typography variant="h6" component="div" sx={{ color: "#323232", mb: 2 }}>
          Origin and Background
        </Typography>
        <Typography paragraph sx={{ color: "#323232" }}>
          Modi (Marathi: मोडी, Mōḍī, Marathi pronunciation: [moːɖiː]) is a script used to write the Marathi language, which is the primary language spoken in the state of Maharashtra, India. There are multiple theories concerning its origin. The Modi script was used alongside the Devanagari script to write Marathi until the 20th century when the Balbodh style of the Devanagari script was promoted as the standard writing system for Marathi.
        </Typography>

        <Typography variant="h6" component="div" sx={{ color: "#323232", mb: 2 }}>
          Etymology
        </Typography>
        <Typography paragraph sx={{ color: "#323232" }}>
          The name "Modi" may be derived from the Marathi verb moḍaṇe (Marathi: मोडणे), which means "to bend or break". Modi is believed to be derived from broken Devanagari characters, which lends support to that particular etymology.
        </Typography>

        <Typography variant="h6" component="div" sx={{ color: "#323232", mb: 2 }}>
          Origin Theories
        </Typography>
        <Typography paragraph sx={{ color: "#323232" }}>
          There are several theories regarding the origin of the Modi script:
        </Typography>
        <ul>
          <li>
            <strong>Hemāḍpant origin theory:</strong> Hemāḍpant was a minister during the reign of Mahadeva (ruled 1261–1271) and the initial years of the reign of Rāmachandra (ruled 1271 to 1309) of the Yadava Dynasty. There are sub-theories that suggest:
            <ul>
              <li>Hemāḍpant created the Modi script.</li>
              <li>The Modi script already existed in the 13th century and was refined by Hemāḍpant.</li>
              <li>Hemāḍpant brought the Modi script to India from Sri Lanka.</li>
            </ul>
          </li>
          <li>
            <strong>Bāḷājī Avajī Chitnis origin theory:</strong> Bāḷājī Avajī Chitnis was the secretary of state to the Maratha king Shivaji Maharaj (ruled 1642–1680).
          </li>
        </ul>

        <Typography variant="h6" component="div" sx={{ color: "#323232", mb: 2 }}>
          History
        </Typography>
        <Typography paragraph sx={{ color: "#323232" }}>
          There are various styles of the Modi script associated with a particular era:
        </Typography>
        <ul>
          <li><strong>Proto-Modi:</strong> The proto-Modi, or ādyakālīn (आद्यकालीन) style appeared in the 12th century.</li>
          <li><strong>Yādava Era:</strong> The Yādava Era style, or yādavakālīn (यादव कालीन), emerged in the 13th century during the Yādava Dynasty.</li>
          <li><strong>Bahamanī Era:</strong> The Bahamanī Era style, or bahamanīkālīn (बहमनी कालीन), appeared in the 14th–16th centuries.</li>
          <li><strong>Chatrapati Shivaji Era:</strong> The Shivaji style, or shivakālīn (शिव कालीन), developed during the 17th century.</li>
          <li><strong>Peshwa Era:</strong> Various Modi styles proliferated during the time of the Maratha Empire and lasted until 1818.</li>
          <li><strong>Post-independence Era:</strong> The use of Modi has diminished since the independence of India, with a revival effort currently underway.</li>
        </ul>

        <Typography variant="h6" component="div" sx={{ color: "#323232", mb: 2 }}>
          Description
        </Typography>
        <Typography paragraph sx={{ color: "#323232" }}>
          The Modi script derives from the Nāgari family of scripts and is a modification of the Balbodh style of the Devanagari script intended for continuous writing. It has 46 distinctive letters, with 36 consonants and 10 vowels.
        </Typography>

        <Typography variant="h6" component="div" sx={{ color: "#323232", mb: 2 }}>
          Usage
        </Typography>
        <Typography paragraph sx={{ color: "#323232" }}>
          The Modi script was used primarily for swift writing in business and administration, including correspondence and accounting. It was also used to encrypt messages since not everyone was well-versed in reading this script.
        </Typography>

        <Typography variant="h6" component="div" sx={{ color: "#323232", mb: 2 }}>
          Printing and Typing
        </Typography>
        <Typography paragraph sx={{ color: "#323232" }}>
          The Modi script has been used for both handwritten documents and printed materials, with various fonts developed for typing. It was added to the Unicode Standard in June 2014.
        </Typography>

        <Typography variant="h6" component="div" sx={{ color: "#323232", mb: 2 }}>
          Documents in the Modi Script
        </Typography>
        <Typography paragraph sx={{ color: "#323232" }}>
          The oldest document in the Modi script is from 1389 and is preserved at the Bhārat Itihās Sanshodhan Mandal (BISM) in Pune.
        </Typography>
      </Box>
    </Container>
  );
};

export default BlogPage;
