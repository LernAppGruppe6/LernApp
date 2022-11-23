from server.bo.Proposal import Proposal
from server.db.Mapper import Mapper
from uuid import UUID


class ProposalMapper(Mapper):

    def __int__(self):
        super().__init__()


    def find_all(self):
        result = []
        cursor = self._connection.cursor()
        cursor.execute("SELECT * FROM proposal")
        tuples = cursor.fetchall()

        for (id, profile_proposal, matches) in tuples:
            proposal = Proposal()
            proposal._set_id(UUID(id))
            proposal._set_profile_proposal(profile_proposal)
            proposal._set_matches(matches)
            result.append(proposal)

        self._connection.commit()
        cursor.close()

        return result

    def find_by_id(self, id):
        result = None
        cursor = self._connection.cursor()
        cursor.execute("SELECT id FROM proposal WHERE id='{}'".format(id))
        tuples = cursor.fetchall()

        try:
            (id, profile_proposal, matches) = tuples[0]
            proposal = Proposal()
            proposal._set_id(UUID(id))
            proposal._set_profile_proposal(profile_proposal)
            proposal._set_matches(matches)
            result = proposal
        except IndexError:
            result = None

        self._connection.commit()
        cursor.close()
        return result

    def find_by_matches(self, matches):
        result = None
        cursor = self._connection.cursor()
        cursor.execute("SELECT matches FROM proposal WHERE id='{}'".format(matches))
        tuples = cursor.fetchall()
        try:
            (id, profile_proposal, matches) = tuples[0]
            proposal = Proposal()
            proposal._set_id(UUID(id))
            proposal._set_profile_proposal(profile_proposal)
            proposal._set_matches(matches)
            result = proposal
        except IndexError:
            result = None

        self._connection.commit()
        cursor.close()
        return result

    def insert(self, proposal: Proposal):
        cursor = self._connection.cursor()
        query = "INSERT INTO subject (id, profile_proposal, matches) VALUES (%s, %s, %s)"
        data = (
            str(proposal._get_id()),
            proposal._get_profile_proposal(),
            proposal._get_matches()
        )
        cursor.execute(query, data)

        self._connection.commit()
        cursor.close()
        return proposal

    def update(self, proposal: Proposal):
        cursor = self._connection.cursor()
        query = "UPDATE proposal SET last_change=%s, occurence=%s WHERE id=%s"
        data = (
            str(proposal._get_id()),
            proposal._get_profile_proposal(),
            proposal._get_matches()
        )
        cursor.execute(query, data)

        self._connection.commit()
        cursor.close()

    def update_by_id(self, proposal: Proposal):
        cursor = self._connection.cursor()
        query = "UPDATE proposal SET last_change=%s, occurence=%s WHERE id=%s"
        data = (
            str(proposal._get_id()),
            proposal._get_profile_proposal(),
            proposal._get_matches()
        )
        cursor.execute(query, data)

        self._connection.commit()
        cursor.close()

    def delete(self, proposal: Proposal):
        cursor = self._connection.cursor()
        cursor.execute("DELETE FROM proposal WHERE id = '{}'".format(str(proposal._get_id())))

        self._connection.commit()
        cursor.close()