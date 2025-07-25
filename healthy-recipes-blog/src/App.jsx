import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppLayout from "./layout/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import { AuthProvider } from "./context/AuthenticationContext";
import AddRecipe from "./pages/AddRecipe";
import { ModalContextProvider } from "./context/ModalContext";
import GuestRoutes from "./protected/GuestRoutes";
import AuthenticatedRoutes from "./protected/AuthenticatedRoutes";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <ModalContextProvider>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <Routes>
                <Route element={<AppLayout />}>
                  <Route index element={<Navigate replace to="home" />} />
                  <Route path="home" element={<HomePage />} />

                  <Route element={<GuestRoutes />}>
                    <Route path="logout" element={<LogoutPage />} />
                    <Route path="add-recipe" element={<AddRecipe />} />
                  </Route>

                  <Route element={<AuthenticatedRoutes />}>
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="login" element={<LoginPage />} />
                  </Route>

                  <Route path="*" element={<PageNotFound />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </QueryClientProvider>
        </AuthProvider>
      </ModalContextProvider>
    </>
  );
}

export default App;
