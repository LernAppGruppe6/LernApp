"@Samira imports/spelling (student, group,...) have to be fixxed after you changed the " \
"spelling in the database and mapper"

from ..server.bo import Conversation
from ..server.bo import LearningPreferences
from ..server.bo import Message
from ..server.bo import Participation
from ..server.bo import Person
from ..server.bo import Profile
from ..server.bo import Proposal
from ..server.bo import StudyGroup

from ..server.db import ConversationMapper
from ..server.db import GroupMapper
from ..server.db import GroupMessageMapper
from ..server.db import JoinGroupRequestMapper
from ..server.db import LearningPreferencesMapper
from ..server.db import MessageMapper
from ..server.db import ProposalMapper
from ..server.db import StudentKnowledgeMapper
from ..server.db import StudentMapper
from ..server.db import SubjectMapper


class LernappAdministration (object):
    def __init__(self):
        pass


