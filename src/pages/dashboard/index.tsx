import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useContact from "../../hooks/useContact";
import { useForm } from "react-hook-form";
import { iRegisterFormNewContactValues } from "../../providers/contactProvider";
import ModalAuth from "../../hooks/useModal";
import { ModalDefault } from "../../components/modalDefault";
import {
  ContactDiv,
  ContainerMainDiv,
  DashMain,
  ModalContainer,
  NavBar,
} from "./style";
import { HiLogout, HiUserCircle } from "react-icons/hi";
import { IoPersonAdd } from "react-icons/io5";

const Dashboard = () => {
  const { user, handleLogout, deleteUser } = useAuth();
  const {
    handleModal,
    modalIsOpen,
    handleModalDeleteAccount,
    modalIsOpenDeleteAccount,
    handleModalCreateContact,
    modalIsOpenCreateContact,
    setIsOpenCreateContact,
    handleModalProfileUser,
    modalIsOpenProfileUser,
  } = ModalAuth();
  const {
    contacts,
    editingContact,
    setEditingContact,
    handleDeleteContact,
    handleEditContact,
    handleCreateContact,
  } = useContact();
  const { register, handleSubmit, reset } =
    useForm<iRegisterFormNewContactValues>();

  const newContact = (data: iRegisterFormNewContactValues) => {
    handleCreateContact(data);
    reset();
    setIsOpenCreateContact(false);
  };

  const editContact = () => {
    handleEditContact();
    reset();
  };

  return (
    <DashMain>
      <ContainerMainDiv>
        <NavBar>
          <p>Oi, {user?.name}!</p>

          <div className="container-nav-div">
            <HiUserCircle
              className="UserSvg"
              onClick={() => handleModalProfileUser()}
            />
            {modalIsOpenProfileUser && (
              <ModalDefault
                callback={() => handleModalProfileUser()}
                maxWidth={500}
              >
                <ModalContainer>
                  {user ? (
                    <ul>
                      <li className="profile" key={user.id}>
                        <p>Nome: {user.name}</p>
                        <p>Telefone: {user.phone}</p>
                        <p>E-mail: {user.email}</p>
                      </li>
                    </ul>
                  ) : (
                    <p>Carregando...</p>
                  )}
                  <div className="div-UserSvg">
                    <button
                      className="delete"
                      onClick={() => handleModalDeleteAccount()}
                    >
                      Deletar conta
                    </button>
                  </div>
                </ModalContainer>
                {modalIsOpenDeleteAccount && (
                  <ModalDefault
                    callback={() => handleModalDeleteAccount()}
                    maxWidth={500}
                  >
                    <ModalContainer>
                        <p>Deseja DELETAR sua conta?</p>
                      <div className="really">
                        <button className="yes" onClick={deleteUser}>
                          Sim, certinho!
                        </button>
                      </div>
                    </ModalContainer>
                  </ModalDefault>
                )}
              </ModalDefault>
            )}
            <Link to="/" onClick={handleLogout}>
              <HiLogout />
            </Link>
          </div>
        </NavBar>
      </ContainerMainDiv>

      <section>
        <div className="title-add">
          <p>Contatos</p>
          <IoPersonAdd
            className="add-new"
            onClick={() => handleModalCreateContact()}
          />
          {modalIsOpenCreateContact && (
            <ModalDefault
              callback={() => handleModalCreateContact()}
              maxWidth={500}
            >
              <ModalContainer>
                <form
                  className="add-contact"
                  onSubmit={handleSubmit(newContact)}
                >
                  <label htmlFor="name">Nome</label>
                  <input type="text" id="name" {...register("name")} required />

                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    required
                  />

                  <label htmlFor="phone">Telefone</label>
                  <input
                    type="text"
                    id="phone"
                    {...register("phone")}
                    required
                  />

                  <button type="submit">Save</button>
                  <button
                    type="button"
                    onClick={() => handleModalCreateContact()}
                  >
                    Cancel
                  </button>
                </form>
              </ModalContainer>
            </ModalDefault>
          )}
        </div>

        {contacts.length > 0 ? (
          <ul>
            {contacts.map((elem) => (
              <ContactDiv key={elem.id}>
                <p>Name: {elem.name}</p>
                <p>Phone: {elem.phone}</p>
                <p>E-mail: {elem.email}</p>

                <button onClick={() => handleModal(parseInt(elem.id))}>
                  Delete
                </button>
                {modalIsOpen[parseInt(elem.id)] &&
                  modalIsOpen[parseInt(elem.id)] === true && (
                    <ModalDefault
                      callback={() => handleModal(parseInt(elem.id))}
                      maxWidth={500}
                    >
                      <ModalContainer>
                        <p>
                          Tem certeza que deseja excluir
                          <span> {elem.name}</span>? Não vai ter volta ein!
                        </p>
                        <button
                          className="btn-delete"
                          onClick={() => handleDeleteContact(elem.id)}
                        >
                          Sim, certinho!
                        </button>
                        <button onClick={() => handleModal(parseInt(elem.id))}>
                          Cancelar
                        </button>
                      </ModalContainer>
                    </ModalDefault>
                  )}

                <button onClick={() => setEditingContact(elem)}>Editar</button>

                {editingContact && editingContact.id === elem.id && (
                  <ModalDefault
                    callback={() => handleEditContact()}
                    maxWidth={500}
                  >
                    <ModalContainer>
                      <form
                        className="edit-form"
                        key={elem.id}
                        onSubmit={handleSubmit(editContact)}
                      >
                        <input
                          type="text"
                          value={editingContact.name}
                          onChange={(e) =>
                            setEditingContact({
                              ...editingContact,
                              name: e.target.value,
                            })
                          }
                        />
                        <input
                          type="text"
                          value={editingContact.email}
                          onChange={(e) =>
                            setEditingContact({
                              ...editingContact,
                              email: e.target.value,
                            })
                          }
                        />
                        <input
                          type="text"
                          value={editingContact.phone}
                          onChange={(e) =>
                            setEditingContact({
                              ...editingContact,
                              phone: e.target.value,
                            })
                          }
                        />
                        <button type="submit">Salvar</button>
                        <button
                          type="button"
                          onClick={() => handleEditContact()}
                        >
                          Cancelar
                        </button>
                      </form>
                    </ModalContainer>
                  </ModalDefault>
                )}
              </ContactDiv>
            ))}
          </ul>
        ) : (
          <p>
            Me parece que você ainda não tem contatos, que tal adicionar algum?
          </p>
        )}
      </section>
    </DashMain>
  );
};

export default Dashboard;
