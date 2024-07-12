import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';

export function RegisterPage() {
    return (
        <AuthLayout title='Register'>
            <form>
                <Grid container>
                    <Grid item xs={12} sx={{ marginTop: 2 }}>
                        <TextField
                            label='Nombre Completo'
                            type='text'
                            placeholder='Nombre completo'
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ marginTop: 2 }}>
                        <TextField
                            label='correo'
                            type='email'
                            placeholder='correo@google.com'
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ marginTop: 2 }}>
                        <TextField
                            label='contraseña'
                            type='password'
                            placeholder='Contraseña'
                            fullWidth
                        />
                    </Grid>

                    <Grid
                        container
                        spacing={2}
                        sx={{ marginBottom: 2, marginTop: 1 }}
                    >
                        <Grid item xs={12} sm={6}>
                            <Button variant='contained' fullWidth>
                                Crear Cuenta
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
                        <Typography sx={{ marginRight: 1 }}>
                            ¿ya tienes una cuenta?
                        </Typography>
                        <Link
                            component={RouterLink}
                            color='inherit'
                            to='/auth/login'
                        >
                            Ingresar
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
}
