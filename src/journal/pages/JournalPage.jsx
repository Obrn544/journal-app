import { IconButton } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView } from '../views/NoteView';
import { NothingSelectedView } from '../views/NothingSelectedView';
import { AddOutlined } from '@mui/icons-material';

export function JournalPage() {
    return (
        <JournalLayout>
            {/* <Typography>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequatur quibusdam numquam, pariatur possimus quae odio,
                distinctio harum assumenda blanditiis sed facilis nostrum,
                quidem praesentium quod accusamus hic asperiores maxime
                recusandae.
            </Typography> */}
            <NothingSelectedView />
            <IconButton
                size='large'
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
                    position: 'fixed',
                    right: 50,
                    bottom: 50,
                }}
            >
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>

            {/* <NoteView /> */}
        </JournalLayout>
    );
}
